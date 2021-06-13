import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="py-1 px-2 mt-2 mr-3 rounded-lg bg-yellow-100 hover:bg-yellow-200 text-sm text-yellow-500 hover:text-yellow-600 dark:bg-yellow-200 dark:hover:bg-yellow-300 dark:text-yellow-600 dark:hover:text-yellow-700">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
