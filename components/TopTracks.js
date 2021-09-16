import Fetcher from '@/lib/fetcher'
import useSWR from 'swr'

const TopTracks = () => {
  const { data } = useSWR('/api/top-tracks', Fetcher)
  console.log(data)
  return (
    <div>
      {data?.tracks ? (
        <ol className="grid lg:grid-rows-5 lg:grid-flow-col gap-4">
          {data.tracks.map((track, i) => {
            return (
              <div key={i + 1} className="flex flex-row items-baseline w-full">
                <p className="text-sm font-bold text-gray-400 dark:text-primary-600">{i + 1}</p>
                <div className="flex flex-col pl-3">
                  <a
                    className="font-medium text-gray-700 dark:text-primary-500 truncate w-60 sm:w-96 md:w-full"
                    href={track.songUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {track.title}
                  </a>
                  <p className="text-gray-500 truncate w-60 sm:w-96 md:w-full">{track.artist}</p>
                </div>
              </div>
            )
          })}
        </ol>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default TopTracks
