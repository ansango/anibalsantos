import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import Link from '@/components/Link'
import { PageSeo } from '@/components/SEO'

export default function Projects() {
  const pins = [15, 14, 12, 11, 7, 6, 4, 3]
  const pinnedProjects = projectsData.filter((project) => pins.includes(project.id))
  return (
    <>
      <PageSeo title={`Proyectos Destacados`} description={siteMetadata.description} />
      <div className="pb-10">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Proyectos destacados
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Estos son mis algunos de mis últimos proyectos personales, puedes acceder a su código en{' '}
            <span className="font-bold">Github</span> y también puedes ver el{' '}
            <Link
              href="/proyectos/listado"
              className="text-base font-bold leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              listado completo
            </Link>
            <span role="img" aria-label="books">
              📚
            </span>
          </p>
        </div>
        <hr className="w-full border-1 border-gray-200 dark:border-gray-800 pb-5" />
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 xl:grid-cols-3 xl:gap-5">
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
            href="/proyectos/listado"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-bold"
            aria-label="todos los proyectos"
          >
            Todos los proyectos &rarr;
          </Link>
        </div>
      </div>
    </>
  )
}
