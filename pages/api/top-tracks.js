/* eslint-disable import/no-anonymous-default-export */
import { getTopTracks } from '@/lib/spotify'

export default async (_, res) => {
  const response = await getTopTracks()
  const { items } = await response.json()

  const tracks = items.map((track) => {
    return {
      artist: track.artists.map((_artist) => _artist.name).join(', '),
      songUrl: track.external_urls.spotify,
      title: track.name,
    }
  })

  return res.status(200).json({ tracks })
}
