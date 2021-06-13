import Link from '@/components/Link'
import { PageSeo } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'

const MAX_DISPLAY = 5
const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSeo title={'Inicio'} description={siteMetadata.description} url={siteMetadata.siteUrl} />
      <div className="">
        <div className="py-10 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Lo último
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Se me olvidan las cosas, entonces escribo.
          </p>
        </div>
        <ul className="pb-10">
          {!posts.length && (
            <div className="text-center">
              <p>No se han encontrado entradas</p>
            </div>
          )}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-4">
                <article>
                  <div>
                    <h2 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-200">
                      <Link href={`/blog/${slug}`}>{title}</Link>
                    </h2>
                  </div>
                  <div className="prose text-gray-500 max-w-none dark:text-gray-400">{summary}</div>
                  <div className="flex flex-wrap">
                    {tags.map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                  <dl className="mt-2">
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>
                        {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                      </time>
                    </dd>
                  </dl>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6 pb-10">
          <Link
            href="/blog"
            className="text-yellow-500 hover:text-yellow-600 dark:hover:text-yellow-400"
            aria-label="all posts"
          >
            Todas las cosas &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
