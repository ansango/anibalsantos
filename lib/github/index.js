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
  const firstDay = new Date(new Date().getFullYear(), 0, 1).toISOString().replace('Z', '+00:00')
  const lastDay = new Date(new Date().getFullYear(), 11, 31).toISOString().replace('Z', '+00:00')

  const body = JSON.stringify({
    query: `query {
      user(login: "${username}") {
        contributionsCollection (from: "${firstDay}" ,to: "${lastDay}"){
          contributionCalendar {
            totalContributions
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
