import {
  EmailShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
} from 'react-share'

import SocialIcon from '@/components/social-icons'

import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSeo } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'

const postDateTemplate = { year: 'numeric', month: 'short', day: 'numeric' }

export default function PostLayout({ children, frontMatter, next, prev }) {
  const { date, title, tags, readingTime } = frontMatter
  const min = Math.round(readingTime.minutes)
  const toRead = `${min} ${min !== 1 ? 'minutos leyendo' : 'minuto de leyendo'}`
  const shareUrl = `${siteMetadata.siteUrl}/blog/${frontMatter.slug}`
  return (
    <SectionContainer>
      <BlogSeo url={`${siteMetadata.siteUrl}/blog/${frontMatter.slug}`} {...frontMatter} />
      <article>
        <LinkedinShareButton url={shareUrl} className="w-3 h-3">
          <SocialIcon kind="linkedin" href={'/'} size="5" />
        </LinkedinShareButton>
        <div className="">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1">
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div className="pb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-8">
              <div className="flex items-center">
                <dl>
                  <dt className="sr-only">Autor</dt>
                  <dd className="flex items-center">
                    <img
                      src={siteMetadata.image}
                      alt="avatar"
                      className="w-6 h-6 rounded-full mr-3"
                    />
                    <dl className="text-sm text-gray-700 dark:text-gray-300 mr-3">
                      <dt className="sr-only">Name</dt>
                      <dd>{`${siteMetadata.author}`}</dd>
                    </dl>
                  </dd>
                </dl>
                <dl className="text-sm text-gray-700 dark:text-gray-300">
                  <dt className="sr-only">Publicado</dt>
                  <dd>
                    <time dateTime={date} className="truncate">
                      {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                    </time>
                  </dd>
                </dl>
              </div>
              <div className="flex items-center">
                <dl className="py-4">
                  <dt className="sr-only">Lectura</dt>
                  <dd className="text-sm text-gray-500 min-w-32">{toRead}</dd>
                </dl>
              </div>
            </div>
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
