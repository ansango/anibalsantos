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
      <div>
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl mr-3 font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Proyectos destacados
          </h1>

          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Estos son mis algunos de mis últimos proyectos personales, puedes acceder a su código en{' '}
            <b>Github</b> y también puedes ver el{' '}
            <Link
              className="font-bold text-yellow-500 hover:text-yellow-600 dark:hover:text-yellow-400 mr-1"
              href="/proyectos/todos"
            >
              listado completo
            </Link>
            <span role="img" aria-label="books">
              📚
            </span>
          </p>
        </div>
        <div className="container pb-12 pt-6">
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
              aria-label="todos los proyectos"
            >
              Todos los proyectos &rarr;
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
