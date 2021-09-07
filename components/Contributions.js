import Link from '@/components/Link'
import useSWR from 'swr'
import Fetcher from '@/lib/fetcher'
import { GithubIcon } from './icons'

const Contributions = () => {
  const { data } = useSWR('/api/contributions-current-year', Fetcher)

  return (
    <div className="flex flex-row mb-8 space-x-2 w-full">
      <GithubIcon size={20} />
      {data?.contributionCalendar ? (
        <Link
          className="text-gray-800 dark:text-gray-200 font-medium  max-w-max truncate"
          href="https://github.com/ansango"
        >
          <span>Contribuciones en {new Date().getFullYear()}</span>
        </Link>
      ) : (
        <p className="text-gray-800 dark:text-gray-200 font-medium max-w-max truncate">
          Sin registro
        </p>
      )}
      <span className="mx-2 text-gray-500 dark:text-gray-300 block">{' – '}</span>
      <p className="text-gray-500 dark:text-gray-300 max-w-max truncate">
        {data?.contributionCalendar.totalContributions ?? 'Github'}
      </p>
    </div>
  )
}

export default Contributions
