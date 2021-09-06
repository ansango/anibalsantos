/* eslint-disable import/no-anonymous-default-export */
import { getTopArtists } from '@/lib/spotify'

export default async (_, res) => {
  const response = await getTopArtists()
  const { items } = await response.json()
  const artists = items.map((artist) => ({
    name: artist.name,
    image: artist.images[1],
  }))
  return res.status(200).json({ artists })
}
