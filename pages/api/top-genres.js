const { getTopGenres } = require('@/lib/spotify')

// eslint-disable-next-line import/no-anonymous-default-export
export default async (_, res) => {
  const response = await getTopGenres()
  const { items } = await response.json()

  const raw = sortObject(count(items.flatMap(({ genres }) => genres)))
  const top10 = toObject(raw.slice(0, 10))
  console.log(top10)
  return res.status(200).json({ items })
}

// function count repeat strings and return object with counter with reduce method
const count = (arr) =>
  arr.reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1
    return acc
  }, {})

// function to sort object by value
const sortObject = (obj) => {
  const sortable = []
  for (let key in obj) {
    sortable.push([key, obj[key]])
  }
  sortable.sort((a, b) => b[1] - a[1])
  return sortable
}

// convert array of arrays into array of objects

const toObject = (arr) =>
  arr.reduce((acc, cur) => {
    acc[cur[0]] = cur[1]
    return acc
  }, {})
