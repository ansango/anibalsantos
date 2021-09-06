import { useSession } from 'next-auth/client'
import { useEffect, useState } from 'react'
import Image from '@/components/Image'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import SendErrors from '@/components/SendErrors'
import { BlogSeo } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import Comment from '@/components/Comment'
import ToRead from '@/components/ToRead'
import formatDate from '@/lib/utils/formatDate'
import SignIn from '@/components/SignIn'
import AddComment from '@/components/AddComment'

import {
  EmailShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share'
import { MailIcon, TelegramIcon, TwitterIcon, WhatsappIcon } from '@/components/icons'

export default function PostLayout({ frontMatter, next, prev, children }) {
  const { date, title, tags, readingTime, cover, slug } = frontMatter
  const urlShare = `${siteMetadata.siteUrl}/blog/${frontMatter.slug}`
  /**
   * * Auth
   */
  const [session] = useSession()

  const user = {
    name: session?.user.name.split(' ')[0],
    email: session?.user.email,
    image: session?.user.image,
  }

  const [comments, setComment] = useState([])

  useEffect(() => {
    let mounted = true
    const getComments = async () => {
      const response = await fetch(`/api/comments`)
      const data = await response.json()
      const result = data.filter((comment) => comment.slug === slug)
      setComment(result)
    }
    getComments()
    return () => (mounted = false)
  }, [slug])

  const onAddComentHandler = (description) => {
    setComment((prevComments) => {
      return [
        ...prevComments,
        {
          image: user?.image,
          name: user?.name,
          description: description,
          email: user?.email,
          slug: slug,
        },
      ]
    })
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
                    {formatDate(date)}
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
                    <div className="mx-1 hover:text-primary-500">
                      <EmailShareButton url={`https://ansango.com/blog/${slug}`} title={title}>
                        <MailIcon size={25} round />
                      </EmailShareButton>
                    </div>
                    <div className="mx-1 hover:text-primary-500">
                      <WhatsappShareButton url={`https://ansango.com/blog/${slug}`} title={title}>
                        <WhatsappIcon size={25} round />
                      </WhatsappShareButton>
                    </div>
                    <div className="mx-1 hover:text-primary-500">
                      <TelegramShareButton url={`https://ansango.com/blog/${slug}`} title={title}>
                        <TelegramIcon size={25} round />
                      </TelegramShareButton>
                    </div>
                    <div className="mx-1 hover:text-primary-500">
                      <TwitterShareButton url={`https://ansango.com/blog/${slug}`} title={title}>
                        <TwitterIcon size={25} round />
                      </TwitterShareButton>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-10">
                {comments.length > 0 && (
                  <div className="mb-10 grid grid-cols-1 xl:grid-cols-2 gap-5">
                    {comments.map((comment, index) => {
                      return <Comment key={index} comment={comment} />
                    })}
                  </div>
                )}
                {!session && <SignIn />}
                {session && (
                  <AddComment user={user} slug={slug} onAddComment={onAddComentHandler} />
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
