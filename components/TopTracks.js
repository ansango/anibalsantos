import Fetcher from '@/lib/fetcher'
import useSWR from 'swr'

const TopTracks = () => {
  const { data } = useSWR('/api/top-tracks', Fetcher)
  return (
    <>
      {data?.tracks ? (
        <ol className="grid lg:grid-rows-5 lg:grid-flow-col gap-4">
          {data.tracks.map((track, i) => {
            const position = i + 1
            const bronze = position === 3 ? '🥉' : null
            const medal = position === 1 ? '🥇' : position === 2 ? '🥈' : bronze
            return (
              <li key={i + 1} className="flex flex-row items-baseline w-full">
                {medal ? (
                  <p className="text-xl font-bold text-primary-500 dark:text-primary-600">
                    {medal}
                  </p>
                ) : (
                  <p className="text-sm font-bold text-primary-500 dark:text-primary-600 mx-2 flex w-2">
                    {position}
                  </p>
                )}
                <div className="flex flex-col pl-3">
                  <a
                    className="font-semibold text-gray-700 dark:text-primary-500 truncate w-60 sm:w-96 md:w-full"
                    href={track.songUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {track.title}
                  </a>
                  <p className="text-gray-500 truncate w-60 sm:w-96 md:w-full">{track.artist}</p>
                </div>
              </li>
            )
          })}
        </ol>
      ) : (
        <div>Loading...</div>
      )}
    </>
  )
}

export default TopTracks
