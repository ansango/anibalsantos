/* eslint-disable import/no-anonymous-default-export */
import { getContributionsByCurrentYear } from '@/lib/github'

export default async (_, res) => {
  const {
    data: {
      user: {
        contributionsCollection: { contributionCalendar },
      },
    },
  } = await getContributionsByCurrentYear()
  return res.status(200).json({ contributionCalendar })
}
