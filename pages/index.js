import Link from '@/components/Link'
import { PageSeo } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import CarouselEl from '@/components/CarouselEl'
import projectsData from '@/data/projectsData'
import { CardCarousel } from '@/components/Card'
import Line from '@/components/Line'
import Accordions from '@/components/Accordions'
import NowPlaying from '@/components/NowPlaying'
import Contributions from '@/components/Contributions'
import Accordion from '@/components/Accordion'

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
  const projects = projectsData.filter((project) => project.title !== 'Curriculum')
  return (
    <>
      <PageSeo title={siteMetadata.title} description={siteMetadata.description} />
      <div className="pb-10">
        <div className="pt-24 pb-10 space-y-2 md:space-y-5">
          <h1 className="text-3xl sm:text-4xl md:text-6xl leading-9 sm:leading-10 md:leading-14 font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
            Hola{' '}
            <span role="img" aria-label="">
              👋
            </span>
            , soy Aníbal
          </h1>
          <p className="text-lg sm:text-xl leading-7 text-gray-500 dark:text-gray-400">
            Soy desarrollador enfocado en el ecosistema JavaScript. Actualmente trabajo como
            Frontend Mid Developer en{' '}
            <Link
              href=" https://www.minsait.com/es"
              className="font-bold leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              Minsait
            </Link>{' '}
            y en mis ratos libres hago muchas{' '}
            <Link
              href="https://ansango-photo.vercel.app"
              className="font-bold leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              fotografías analógicas.
            </Link>
          </p>
          <NowPlaying />
          <Contributions />
        </div>
        <div className="hidden md:block">
          <div className="pt-6 pb-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl leading-9 sm:leading-10 md:leading-14 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 ">
              Publicaciones destacadas
            </h2>
            <p className="text-md sm:text-lg leading-7 text-gray-500 dark:text-gray-400">
              No se si las mejores hasta ahora, pero sí que hay algunas que me gustan.
            </p>
          </div>
          <ul className="grid gap-3 grid-cols-2 py-5">
            {pinned.map((bookmark) => {
              const { slug, title, summary } = bookmark
              return (
                <li key={slug}>
                  <Link href={`/blog/${slug}`}>
                    <article className="p-5 border border-gray-300 rounded-lg">
                      <h3 className="text-xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-200 truncate">
                        {title}
                      </h3>
                      <p className="text-gray-500 max-w-none dark:text-gray-400 truncate">
                        {summary}
                      </p>
                    </article>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="md:hidden py-5">
          <Accordion posts={pinned} titleAccordion="Publicaciones destacadas" isPinned />
        </div>
        <div className="pt-6 pb-5">
          <h2 className="text-2xl sm:text-3xl md:text-4xl leading-9 sm:leading-10 md:leading-14 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 ">
            Últimas publicaciones
          </h2>
          <p className="text-md sm:text-lg leading-7 text-gray-500 dark:text-gray-400">
            Se me olvidan las cosas, entonces escribo.
          </p>
        </div>
        <Line />
        <ul>
          {!posts.length && (
            <div className="text-center">
              <p>No se han encontrado entradas</p>
            </div>
          )}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-6">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                    <dl className="xl:hidden">
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-sm sm:text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div>
                        <h3 className="text-xl sm:text-xl md:text-2xl leading-9 font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
                          <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                            {title}{' '}
                            <span className="text-xl text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                              &rarr;
                            </span>
                          </Link>
                        </h3>
                        <div className="text-md sm:text-lg leading-7 text-gray-500 dark:text-gray-400">
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
      <Line />
      <CarouselEl title="Últimos proyectos" subtitle="A veces aprendo cosas nuevas">
        {projects.map((project) => (
          <div key={project.id} className="px-2">
            <CardCarousel
              title={project.title}
              description={project.description}
              imgSrc={project.imgSrc}
              href={project.href}
              stack={project.stack}
            />
          </div>
        ))}
      </CarouselEl>
      <Line />
      <Accordions
        data={[
          // { title: 'destacados', data: pinned },
          { title: 'Marcadores', data: bookmarks },
          { title: 'Chuletas', data: cheatsheet },
        ]}
      />
    </>
  )
}
