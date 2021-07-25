import { BookIcon, ClockIcon } from './icons'

const ToRead = ({ readingTime }) => {
  const mins = Math.round(readingTime.minutes)
  return (
    <>
      <span className="flex items-center space-x-1">
        <span>{`${mins} '`}</span> <ClockIcon size={16} /> <BookIcon size={18} />
      </span>
    </>
  )
}
export default ToRead
