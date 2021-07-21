import { HiChevronDown as ArrowDown } from 'react-icons/hi'
import { Disclosure, Transition } from '@headlessui/react'
import Link from '@/components/Link'

const Accordion = ({ posts, titleAccordion }) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex items-center justify-between w-full focus:outline-none pt-5">
            <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10 md:leading-14 capitalize">
              {titleAccordion}
            </h2>
            <div className="px-4">
              <ArrowDown size={26} className={`${open ? 'transform rotate-180' : ''}`} />
            </div>
          </Disclosure.Button>
          <Transition
            show={open}
            enter="transition duration-200 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-200 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="py-5">
              <ul className="grid gap-3 md:grid-cols-2">
                {posts.map((bookmark) => {
                  const { slug, title, summary } = bookmark
                  return (
                    <li key={slug}>
                      <Link href={`/blog/${slug}`}>
                        <article className="p-5 border border-gray-300 rounded-lg">
                          <h3 className="text-xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-200">
                            {title}
                          </h3>
                          <p className="text-gray-500 max-w-none dark:text-gray-400">{summary}</p>
                        </article>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}

export default Accordion
