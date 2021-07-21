import Link from '@/components/Link'
import { PageSeo } from '@/components/SEO'
import Tag from '@/components/Tag'
import Accordion from '@/components/Accoordion'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  const bookmarks = posts
    .filter((post) => post.tags.includes('bookmarks') && post.slug !== 'bookmarks/todos')
    .sort(function (a, b) {
      return new Date(a.date) - new Date(b.date)
    })

  const cheatsheet = posts
    .filter((post) => post.tags.includes('cheatsheet') && post.slug !== 'chuletas/todos')
    .sort(function (a, b) {
      return new Date(a.date) - new Date(b.date)
    })

  const pinned = posts.filter((post) => post.tags.includes('pinned'))

  return { props: { posts, bookmarks, cheatsheet, pinned } }
}

export default function Home({ posts, bookmarks, cheatsheet, pinned }) {
  const accordionBlocks = [
    { title: 'destacados', data: pinned },
    { title: 'marcadores', data: bookmarks },
    { title: 'chuletas', data: cheatsheet },
  ]
  return (
    <>
      <PageSeo title={siteMetadata.title} description={siteMetadata.description} />
      <div className="pb-10">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Últimas publicaciones
          </h1>
          <p className="text-xl leading-7 text-gray-500 dark:text-gray-400">
            Se me olvidan las cosas, entonces escribo.
          </p>
        </div>
        <hr className="w-full border-1 border-gray-200 dark:border-gray-800" />
        <ul>
          {!posts.length && (
            <div className="text-center">
              <p>No se han encontrado entradas</p>
            </div>
          )}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-8">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                    <dl className="xl:hidden">
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div>
                        <h2 className="text-2xl font-bold leading-8 tracking-tight">
                          <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                            {title}{' '}
                            <span className="text-4xl text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                              &rarr;
                            </span>
                          </Link>
                        </h2>
                        <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                          {summary}
                        </div>
                        <div className="flex flex-wrap items-center">
                          {tags.map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <dl className="hidden xl:text-right xl:block">
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
        {posts.length > MAX_DISPLAY && (
          <div className="flex justify-end text-lg leading-6">
            <Link
              href="/blog"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-bold"
              aria-label="all posts"
            >
              Publicaciones &rarr;
            </Link>
          </div>
        )}
      </div>

      <hr className="w-full border-1 border-gray-200 dark:border-gray-800" />
      <div className="pb-5">
        {accordionBlocks.map((block) => (
          <Accordion key={block.title} posts={block.data} titleAccordion={block.title} />
        ))}
      </div>
    </>
  )
}
