import Fetcher from '@/lib/fetcher'
import useSWR from 'swr'

const TopArtists = () => {
  const { data } = useSWR('/api/top-artists', Fetcher)
  const artists = data?.artists
  if (!artists) {
    return <></>
  }
  return <div></div>
}

export default TopArtists
