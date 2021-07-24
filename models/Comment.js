import mongoose from 'mongoose'
const schema = {
  slug: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  description: { type: String, maxlength: 500, required: true },
}
const CommentSchema = new mongoose.Schema(schema, { timestamps: true })

export default mongoose.models.Comment || mongoose.model('Comment', CommentSchema)