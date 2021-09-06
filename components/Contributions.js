import Link from '@/components/Link'
import useSWR from 'swr'
import Fetcher from '@/lib/fetcher'
import { GithubIcon } from './icons'

const Contributions = () => {
  const { data } = useSWR('/api/contributions', Fetcher)

  return (
    <>
      {data?.totalContributions ? (
        <Link
          className="text-gray-800 dark:text-gray-200 font-medium  max-w-max truncate flex flex-row mb-8 space-x-2 w-full"
          href="https://github.com/ansango"
        >
          <GithubIcon size={20} />
          <span>Contribuciones</span>
          <span className="text-gray-500 dark:text-gray-300">
            {` – ${data.totalContributions}`}
          </span>
        </Link>
      ) : (
        <></>
      )}
    </>
  )
}

export default Contributions
