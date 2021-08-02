import db from '@/lib/db'
import Comment from 'models/Comment'

function initMiddleware(middleware) {
  return (req, res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result)
        }
        return resolve(result)
      })
    })
}

const handler = async (req, res) => {
  await db()
  if (req.method === 'GET') {
    try {
      const result = await Comment.find({})
      const comments = result.map((doc) => {
        const comment = doc.toObject()
        comment._id = comment._id.toString()
        return comment
      })
      res.status(200).json(comments)
    } catch (error) {
      res.status(500).json({ status: 'Error', error: error })
    }
  } else if (req.method === 'POST') {
    const comment = new Comment(req.body)
    comment.save()
    res.status(200).json({ status: 'Comentario creado', data: comment })
  } else {
    res.status(400).json({ status: 'Error', error: 'No permitido' })
  }
}
export default handler
