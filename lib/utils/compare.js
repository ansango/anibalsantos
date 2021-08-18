export const compareById = (a, b) => {
  const elA = a.id
  const elB = b.id
  let comparison = 0
  if (elA > elB) {
    comparison = -1
  } else {
    comparison = 1
  }

  return comparison
}
