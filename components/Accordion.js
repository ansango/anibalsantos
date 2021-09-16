import { Disclosure, Transition } from '@headlessui/react'
import Link from '@/components/Link'
import { ChevDownIcon } from './icons'

const Accordion = ({ posts, titleAccordion, isPinned = false }) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex items-center justify-between w-full focus:outline-none pt-5">
            {isPinned ? (
              <div className="text-left max-w-sm sm:max-w-lg">
                <h2 className="text-2xl sm:text-3xl md:text-4xl leading-9 sm:leading-10 md:leading-14 font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
                  {titleAccordion}
                </h2>
                <p className="text-md sm:text-lg leading-7 text-gray-500 dark:text-gray-400">
                  No se si las mejores hasta ahora, pero sí que hay algunas que me gustan.
                </p>
              </div>
            ) : (
              <h4 className="text-2xl leading-9 sm:leading-10 md:leading-14 font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
                {titleAccordion}
              </h4>
            )}
            <div className="px-4">
              <ChevDownIcon size={26} className={`${open ? 'transform rotate-180' : ''}`} />
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
              <ul className="grid gap-3 grid-cols-1 md:grid-cols-2">
                {posts.map((bookmark) => {
                  const { slug, title, summary } = bookmark
                  return (
                    <li key={slug}>
                      <Link href={`/blog/${slug}`}>
                        <article className="p-5 border border-gray-300 rounded-lg">
                          <h3 className="text-xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-200 truncate">
                            {title}
                          </h3>
                          <p className="text-gray-500 dark:text-gray-400 tru">{summary}</p>
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
