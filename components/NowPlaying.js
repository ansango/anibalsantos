import Link from '@/components/Link'
import useSWR from 'swr'
import Fetcher from '@/lib/fetcher'
import { SpotifyIcon } from './icons'

const NowPlaying = () => {
  const { data } = useSWR('/api/now-playing', Fetcher)

  return (
    <div className="flex flex-row mb-8 space-x-2 w-full pt-3">
      <SpotifyIcon className="text-green-400" size={20} />{' '}
      {data?.songUrl ? (
        <Link
          className="text-gray-800 dark:text-gray-200 font-medium  max-w-max truncate"
          href={data.songUrl}
        >
          {data.title}
        </Link>
      ) : (
        <p className="text-gray-800 dark:text-gray-200 font-medium max-w-max truncate">
          Nada reproduciendo
        </p>
      )}
      <span className="mx-2 text-gray-500 dark:text-gray-300 block">{' – '}</span>
      <p className="text-gray-500 dark:text-gray-300 max-w-max truncate">
        {data?.artist ?? 'Spotify'}
      </p>
    </div>
  )
}

export default NowPlaying
