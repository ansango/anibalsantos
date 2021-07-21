import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text, isBig = false }) => {
  return (
    <>
      {isBig && (
        <Link href={`/tags/${kebabCase(text)}`}>
          <a className="px-4 py-2 mt-2 mr-3 rounded-lg bg-primary-100 hover:bg-primary-200 text-sm text-primary-500 hover:text-primary-600 dark:bg-primary-200 dark:hover:bg-primary-300 dark:text-primary-600 dark:hover:text-primary-700">
            {text.split(' ').join('-')}
          </a>
        </Link>
      )}
      {!isBig && (
        <Link href={`/tags/${kebabCase(text)}`}>
          <a className="px-2 mt-2 mr-3 rounded-lg bg-primary-100 hover:bg-primary-200 text-sm text-primary-500 hover:text-primary-600 dark:bg-primary-200 dark:hover:bg-primary-300 dark:text-primary-600 dark:hover:text-primary-700">
            {text.split(' ').join('-')}
          </a>
        </Link>
      )}
    </>
  )
}

export default Tag
