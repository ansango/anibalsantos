import { HiChevronDown as ArrowDown } from 'react-icons/hi'
import { Disclosure } from '@headlessui/react'
import Link from '@/components/Link'
const Bookmarks = ({ bookmarks }) => {
  return (
    <Disclosure>
      {({ open }) => (
        <div className="py-10 space-y-2 md:space-y-5">
          <Disclosure.Button className="flex items-center w-full focus:outline-none">
            <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:leading-14">
              Bookmarks
            </h2>
            <div className="px-4">
              <ArrowDown className={`${open ? 'transform rotate-180' : ''}`} />
            </div>
          </Disclosure.Button>
          <Disclosure.Panel className="pb-10">
            <ul className="grid gap-3 md:grid-cols-2">
              {bookmarks.map((bookmark) => {
                const { slug, title, summary } = bookmark
                return (
                  <li key={slug}>
                    <Link href={`/blog/${slug}`}>
                      <article className="p-5 border border-gray-300 rounded-lg">
                        <h3 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-200">
                          {title}
                        </h3>
                        <p className="prose text-gray-500 max-w-none dark:text-gray-400">
                          {summary}
                        </p>
                      </article>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  )
}

export default Bookmarks
