const url = 'https://api.github.com/graphql'
const token = process.env.GITHUB_TOKEN
const headers = {
  Authorization: `bearer ${token}`,
}
const method = 'POST'
const username = 'ansango'

export const getContributions = async () => {
  const body = JSON.stringify({
    query: `query {
            user(login: "${username}") {
              name
              contributionsCollection {
                contributionCalendar {
                  colors
                  totalContributions
                  weeks {
                    contributionDays {
                      color
                      contributionCount
                      date
                      weekday
                    }
                    firstDay
                  }
                }
              }
            }
          }`,
  })
  const response = await fetch(url, {
    method,
    body,
    headers,
  })
  const data = await response.json()
  return data
}

export const getContributionsByCurrentYear = async () => {
  const body = JSON.stringify({
    query: `query {
      user(login: "${username}") {
        contributionsCollection (from: "${getFirstDayOfCurrentYear()}" ,to: "${getLastDayOfCurrentYear()}"){
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
      }
    }`,
  })
  const response = await fetch(url, {
    method,
    body,
    headers,
  })
  const data = await response.json()
  return data
}

/* 
  group by month array of days and sort by month
*/

export const groupContributionsByMonth = (days) => {
  if (!days) {
    return []
  }
  const result = []
  let month = null
  days.forEach((day) => {
    const date = new Date(day.date)
    if (month !== date.getMonth()) {
      month = date.getMonth()
      result.push({
        month: date.getMonth(),
        days: [],
      })
    }
    result[result.length - 1].days.push(day)
  })
  return result.map((_month) => {
    const { days, month: monthNumber } = _month
    return {
      name: getMonthName(monthNumber + 1),
      contributions: days.reduce((acc, day) => acc + day.contributionCount, 0),
    }
  })
}

export const getTotalMaxValue = (months) => {
  const values = months.map((month) => month.contributions)
  return Math.max(...values)
}

export const getRoundedValue = (value, total) => {
  return Math.round((value / total) * 100) + '%'
}

//convert a number in month Intl.DateTimeFormat('es-ES', { month: 'long' })

const getMonthName = (month) => {
  const date = new Date()
  date.setMonth(month - 1)
  return Intl.DateTimeFormat('es-ES', { month: 'long' }).format(date)
}

/**
 * get first day of current year to iso string
 */
const getFirstDayOfCurrentYear = () => {
  const date = new Date()
  date.setMonth(0)
  date.setDate(1)
  return date.toISOString().replace('Z', '+00:00')
}

/**
 * get last day of current year to iso string
 */

const getLastDayOfCurrentYear = () => {
  const date = new Date()
  date.setMonth(11)
  date.setDate(31)
  return date.toISOString().replace('Z', '+00:00')
}
