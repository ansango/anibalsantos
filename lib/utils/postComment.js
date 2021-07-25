export const postComment = async (comment) => {
  await fetch(`/api/comments/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment),
  })
}
