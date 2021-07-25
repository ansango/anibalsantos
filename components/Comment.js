import Image from '@/components/Image'

const Comment = ({ comment }) => {
  const { image, name, description } = comment
  return (
    <div className="p-5 border-2 border-primary-300 rounded-lg">
      <span className="flex items-center">
        <Image src={image} alt="avatar" width="24px" height="24px" className="rounded-full" />
        <span className="font-bold ml-1 mr-2">{name}</span>
      </span>
      <p className="pt-3">{description}</p>
    </div>
  )
}

export default Comment
