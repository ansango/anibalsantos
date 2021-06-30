import { HiChevronDown as ArrowDown } from 'react-icons/hi'
import { Disclosure, Transition } from '@headlessui/react'
import Link from '@/components/Link'

const Pinned = ({ posts }) => {
  const pinned = posts.filter((post) => post.tags.includes('pinned'))
  return (
    <Disclosure>
      {({ open }) => (
        <div className="pt-5 space-y-2 md:space-y-5">
          <Disclosure.Button className="flex items-center justify-between w-full focus:outline-none">
            <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10 md:leading-14">
              Destacados
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
                {pinned.map((post) => {
                  const { slug, title } = post
                  return (
                    <li key={slug}>
                      <Link href={`/blog/${slug}`}>
                        <article className="p-5 border border-gray-300 rounded-lg">
                          <h3 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-200">
                            {title}
                          </h3>
                        </article>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </Disclosure.Panel>
          </Transition>
        </div>
      )}
    </Disclosure>
  )
}
export default Pinned
