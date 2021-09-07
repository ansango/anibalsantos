/* eslint-disable import/no-anonymous-default-export */
import { getContributions } from '@/lib/github'

export default async (_, res) => {
  const {
    data: {
      user: { contributionsCollection },
    },
  } = await getContributions()

  return res.status(200).json(contributionsCollection)
}
