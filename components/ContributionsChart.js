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
        <div className="">
          {months.map((month, i) => {
            const roundedValue = getRoundedValue(month.contributions, totalMax)
            const barFillHeight = totalMax > 0 ? roundedValue : '0%'

            return (
              <div key={i}>
                {month.contributions > 0 && (
                  <div key={month.name} className="flex items-center justify-between">
                    <div
                      key={month.name}
                      className="bg-green-300 dark:bg-green-800 my-1 py-1 px-3 flex items-center justify-between flex-row-reverse md:flex-row-reverse"
                      style={{ width: barFillHeight }}
                    >
                      <div className="text-green-800 font-bold dark:text-green-200">
                        {month.contributions}
                      </div>
                      <div className="hidden md:block">
                        <div className="text-green-800 font-bold dark:text-green-200 capitalize">
                          {month.name}
                        </div>
                      </div>
                    </div>
                    <div className="md:hidden pl-6">
                      <div className="text-green-700 font-bold dark:text-green-200 capitalize">
                        {month.name}
                      </div>
                    </div>
                  </div>
                )}
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
