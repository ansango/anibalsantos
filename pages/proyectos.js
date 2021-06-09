import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import Link from '@/components/Link'
import { PageSeo } from '@/components/SEO'

export default function Projects() {
  const pins = [1, 3, 4, 6, 7, 8]
  const pinnedProjects = projectsData.filter((project) => pins.includes(project.id))
  return (
    <>
      <PageSeo
        title={`Proyectos - ${siteMetadata.author}`}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/proyectos`}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <div className="flex items-center">
            <h1 className="text-3xl mr-3 font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Proyectos destacados
            </h1>
            <span className="text-3xl" role="img" aria-label="pushpin">
              📌
            </span>
          </div>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Estos son mis algunos de mis últimos proyectos personales, si quieres ver el listado
            completo, puedes hacerlo{' '}
            <Link
              className="font-bold text-yellow-500 hover:text-yellow-600 dark:hover:text-yellow-400"
              href="/proyectos/todos"
            >
              aquí
            </Link>
            .
          </p>
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap -m-4">
            {pinnedProjects.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
                stack={d.stack}
              />
            ))}
          </div>
          <div className="flex justify-end text-base font-medium leading-6 pt-10">
            <Link
              href="/proyectos/todos"
              className="text-yellow-500 hover:text-yellow-600 dark:hover:text-yellow-400"
              aria-label="all posts"
            >
              Todos los proyectos &rarr;
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
