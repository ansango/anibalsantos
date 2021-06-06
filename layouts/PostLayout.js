import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSeo } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ children, frontMatter, next, prev }) {
  const { date, title, tags, readingTime, author } = frontMatter
  const min = Math.round(readingTime.minutes)
  const toRead = `- ${min} ${min !== 1 ? 'minutos de lectura' : 'minuto de lectura'}`
  return (
    <SectionContainer>
      <BlogSeo url={`${siteMetadata.siteUrl}/blog/${frontMatter.slug}`} {...frontMatter} />
      <article>
        <div className="">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div className="pb-8">
            <dl className="pt-6 pb-10">
              <dt className="sr-only">Authors</dt>
              <dd>
                <ul className="flex justify-center space-x-8 xl:block sm:space-x-12 xl:space-x-0 xl:space-y-8">
                  <li className="flex items-center space-x-2">
                    <img src={siteMetadata.image} alt="avatar" className="w-10 h-10 rounded-full" />
                    <dl className="text-sm font-medium leading-5 whitespace-nowrap">
                      <dt className="sr-only">Name</dt>
                      <dd className="text-gray-900 dark:text-gray-100">{siteMetadata.author}</dd>
                      {typeof siteMetadata.twitter === 'string' && (
                        <>
                          <dt className="sr-only">Instagram</dt>
                          <dd>
                            <Link
                              href={siteMetadata.instagram}
                              target="_blank"
                              className="text-yellow-500 hover:text-yellow-600 dark:hover:text-yellow-400"
                            >
                              {siteMetadata.instagram.replace('https://instagram.com/', '@')}
                            </Link>
                          </dd>
                        </>
                      )}
                    </dl>
                  </li>
                </ul>
              </dd>
            </dl>
            <dl className="space-y-10">
              <div>
                <dt className="sr-only">Publicado</dt>
                <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                  <time dateTime={date}>
                    {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}{' '}
                  </time>
                  <span>{toRead}</span>
                </dd>
              </div>
            </dl>
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2">
              <div className="pt-10 pb-8 prose dark:prose-dark max-w-none">{children}</div>
            </div>
            <footer>
              <div className="text-sm font-medium leading-5 divide-gray-200 xl:divide-y dark:divide-gray-700 xl:col-start-1 xl:row-start-2">
                {tags && (
                  <div className="py-4 xl:py-8">
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
                {(next || prev) && (
                  <div className="flex justify-between py-4">
                    {prev && (
                      <div className="flex flex-col items-start">
                        <h2 className="text-xs tracking-wide text-gray-500 dark:text-gray-400">
                          Anterior
                        </h2>
                        <div className="text-yellow-500 hover:text-yellow-600 dark:hover:text-yellow-300">
                          <Link href={`/blog/${prev.slug}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {!prev && <div></div>}
                    {next && (
                      <div className="flex flex-col items-end">
                        <h2 className="text-xs tracking-wide text-gray-500 dark:text-gray-400">
                          Siguiente
                        </h2>
                        <div className="text-yellow-500 hover:text-yellow-600 dark:hover:text-yellow-300">
                          <Link href={`/blog/${next.slug}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                    {!next && <div></div>}
                  </div>
                )}
              </div>
              <div className="pt-4 xl:pt-8">
                <Link
                  href="/blog"
                  className="text-yellow-500 hover:text-yellow-600 dark:hover:text-yellow-400"
                >
                  &larr; Todas las cosas
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
