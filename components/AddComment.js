import { useState } from 'react'
import Image from './Image'

const AddComent = ({ user, onAddComment }) => {
  const { name, image } = user
  const [enteredComment, setEnteredComment] = useState('')

  const commentChangeHandler = (event) => {
    setEnteredComment(event.target.value)
  }

  const addCommentHandler = (event) => {
    event.preventDefault()
    onAddComment(enteredComment)
    setEnteredComment('')
  }

  return (
    <div>
      <form onSubmit={addCommentHandler}>
        <label className="block pb-3">
          <div className="sm:flex items-center">
            <span className="flex items-center">
              <Image src={image} alt="avatar" width="24px" height="24px" className="rounded-full" />
              <span className="font-bold ml-1 mr-2">{name}</span>
            </span>
            <span className="text-gray-700">
              ¿qué te ha parecido la entrada?{' '}
              <span role="img" aria-label="smile">
                😄
              </span>
            </span>
          </div>
          <textarea
            className="mt-1 block w-full rounded-md border-2 border-primary-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
            rows="3"
            onChange={commentChangeHandler}
            value={enteredComment}
          ></textarea>
        </label>
        <button
          type="submit"
          className="bg-primary-300 hover:bg-primary-200 text-primary-600 font-bold px-3 py-2 border-b-4 border-primary-500 rounded-md"
        >
          Añadir
        </button>
      </form>
    </div>
  )
}
export default AddComent
