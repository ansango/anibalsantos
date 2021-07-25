import { BASEURL } from '../base'

export const postComment = async (comment) => {
  await fetch(`${BASEURL}/api/comments/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment),
  })
}
