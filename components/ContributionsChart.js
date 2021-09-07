import Link from '@/components/Link'
import useSWR from 'swr'
import Fetcher from '@/lib/fetcher'
import { GithubIcon } from './icons'

const ContributionsChart = () => {
  const { data } = useSWR('/api/contributions', Fetcher)

  let days = data?.weeks.map((week) => week.contributionDays).flatMap((e) => e)

  return (
    <>
      {days ? (
        <div className="flex flex-col h-44 flex-wrap w-full">
          {days.map((day, index) => {
            return (
              <div
                key={index}
                className="p-1 m-1 w-4 h-4"
                style={{ backgroundColor: day.color }}
              ></div>
            )
          })}
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default ContributionsChart
