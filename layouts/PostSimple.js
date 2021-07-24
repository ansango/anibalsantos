import { signIn, useSession } from 'next-auth/client'
import { isMobile } from 'react-device-detect'
import Image from '@/components/Image'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import SendErrors from '@/components/SendErrors'
import { BlogSeo } from '@/components/SEO'
import SocialShare from '@/components/SocialShare'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { BookIcon, ClockIcon } from '@/components/icons'

const postDateTemplate = { year: 'numeric', month: 'short', day: 'numeric' }

const ToRead = ({ readingTime }) => {
  const mins = Math.round(readingTime.minutes)
  return (
    <>
      <span className="flex items-center space-x-1">
        <span>{`${mins} '`}</span> <ClockIcon size={16} /> <BookIcon size={18} />
      </span>
    </>
  )
}

export default function PostLayout({ frontMatter, next, prev, children }) {
  const [session, loading] = useSession()
  const name = session?.user.name
  const email = session?.user.email
  const { date, title, tags, readingTime, cover, comments } = frontMatter
  const urlShare = `${siteMetadata.siteUrl}/blog/${frontMatter.slug}`
  const addCommentHandler = (event) => {
    event.preventDefault()
    if (!email) return
  }

  return (
    <SectionContainer>
      <BlogSeo url={`${siteMetadata.siteUrl}/blog/${frontMatter.slug}`} {...frontMatter} />
      <article>
        <div>
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1">
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div className="flex justify-between items-center w-full mt-8 mb-2">
            <div className="flex items-center">
              <dl>
                <dt className="sr-only">Autor</dt>
                <dd className="flex items-center">
                  <Image
                    src={siteMetadata.image}
                    alt="avatar"
                    width="24px"
                    height="24px"
                    className="rounded-full mr-3"
                  />
                  <dl className="text-sm text-gray-700 dark:text-gray-300 mx-2">
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
                <dd className="text-sm text-gray-500 min-w-32">
                  <ToRead readingTime={readingTime} />
                </dd>
              </dl>
            </div>
          </div>
          <Image alt={title} src={cover} width="1920px" height="1280px" quality={30} />
          <div
            className="pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 "
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2">
              <div className="pt-10 pb-8 prose dark:prose-dark max-w-none">{children}</div>
            </div>

            <footer className="pt-8">
              <div className="flex flex-col items-center md:items-start">
                <div className="pb-4">
                  <SendErrors params={{ title: title, url: urlShare, text: title }} />
                </div>
                <div className="flex flex-col items-center md:flex-row justify-between w-full pb-2">
                  {tags && (
                    <div className="flex flex-wrap pb-4 md:pb-0">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  )}
                  <div className="flex justify-center">
                    <SocialShare
                      kind={'mail'}
                      size={5}
                      params={{ title: title, url: urlShare, text: title }}
                    ></SocialShare>
                    <SocialShare
                      kind={'twitter'}
                      size={5}
                      params={{ title: title, url: urlShare, tags: tags }}
                    ></SocialShare>
                    <SocialShare
                      kind={'whatsapp'}
                      size={5}
                      params={{ url: urlShare, title: title, isMobile: isMobile }}
                    ></SocialShare>
                    <SocialShare
                      kind={'telegram'}
                      size={5}
                      params={{ url: urlShare, text: title }}
                    ></SocialShare>
                  </div>
                </div>
              </div>
              <div>
                {comments.length > 0 && (
                  <>
                    {comments.map((comment, index) => {
                      return (
                        <div className="py-5" key={index}>
                          <h6>{comment.userId}</h6>
                          <p>{comment.description}</p>
                        </div>
                      )
                    })}
                  </>
                )}
                {!session && (
                  <>
                    <p>Para dejar un comentario inicia sesión</p>
                    <button
                      onClick={() => {
                        signIn('github')
                      }}
                    >
                      Github
                    </button>
                    <button
                      onClick={() => {
                        signIn('google')
                      }}
                    >
                      Google
                    </button>
                  </>
                )}
                {session && (
                  <div>
                    <form onSubmit={addCommentHandler}>
                      <label className="block">
                        <span className="text-gray-700">
                          Hola {name} ¿qué te ha parecido la entrada?{' '}
                        </span>
                        <textarea
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                          rows="3"
                        ></textarea>
                      </label>
                    </form>
                  </div>
                )}
              </div>
              <div className="flex flex-col items-center md:flex-row md:justify-between">
                {prev && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/blog/${prev.slug}`}
                      className="text-primary-500  hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      &larr; {prev.title}
                    </Link>
                  </div>
                )}
                {next && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/blog/${next.slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      {next.title} &rarr;
                    </Link>
                  </div>
                )}
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
