import useSWR from 'swr'
import Fetcher from '@/lib/fetcher'
import { Popover } from '@headlessui/react'
import { getTotalMaxValue, getRoundedValue, groupContributionsByMonth } from '@/lib/github'

const ContributionsChart = () => {
  const { data } = useSWR('/api/contributions-current-year', Fetcher)

  const days = data?.contributionCalendar.weeks
    .map((week) => week.contributionDays)
    .flatMap((e) => e)

  const months = groupContributionsByMonth(days)
  const totalMax = getTotalMaxValue(months)

  return (
    <div className="py-5">
      {months ? (
        <div className="grid grid-cols-12 gap-1 h-96">
          {months.map((month, i) => {
            const roundedValue = getRoundedValue(month.contributions, totalMax)
            const barFillHeight = totalMax > 0 ? roundedValue : '0%'

            return (
              <div key={month.name} className="h-full flex flex-col-reverse text-center">
                <div className="">{month.name}</div>
                <div
                  className="bg-green-400 hover:bg-green-200 rounded-t-lg cursor-pointer"
                  style={{ height: barFillHeight }}
                ></div>
              </div>
            )
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

function MyPopover() {
  return (
    <Popover className="relative">
      <Popover.Button>Solutions</Popover.Button>

      <Popover.Panel className="absolute z-10">
        <div className="grid grid-cols-2">
          <a href="/analytics">Analytics</a>
          <a href="/engagement">Engagement</a>
          <a href="/security">Security</a>
          <a href="/integrations">Integrations</a>
        </div>
      </Popover.Panel>
    </Popover>
  )
}

export default ContributionsChart
