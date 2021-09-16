import Fetcher from '@/lib/fetcher'
import useSWR from 'swr'
import Image from './Image'

const TopArtists = () => {
  const { data } = useSWR('/api/top-artists', Fetcher)

  return (
    <>
      {data?.artists ? (
        <ol className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {data.artists.map((artist, i) => {
            const position = i + 1
            const bronze = position === 3 ? '🥉' : null
            const medal = position === 1 ? '🥇' : position === 2 ? '🥈' : bronze
            return (
              <li key={i + 1} className="flex flex-row items-baseline w-full ">
                <article className="border border-primary-200 rounded-lg w-full flex bg-gradient-to-r from-primary-200  to-white dark:from-gray-900 dark:to-gray-900 dark:border-primary-600">
                  <div className="w-1/3">
                    <div className="w-24 mt-2 ml-2">
                      <Image
                        className="rounded-lg"
                        src={artist.image.url}
                        width={artist.image.width}
                        height={artist.image.height}
                        alt={artist.name}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between px-5 w-2/3">
                    <h3 className="text-md font-semibold text-primary-800 dark:text-primary-500 truncate">
                      {artist.name}
                    </h3>
                    {medal ? (
                      <p className="text-2xl font-bold text-primary-500 dark:text-primary-600">
                        {medal}
                      </p>
                    ) : (
                      <p className="text-lg font-bold text-primary-500 dark:text-primary-600">
                        {position}
                      </p>
                    )}
                  </div>
                </article>
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

export default TopArtists
