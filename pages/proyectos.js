import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import Link from '@/components/Link'
import { PageSeo } from '@/components/SEO'

export default function Projects() {
  const b5 = 'Undefined Band - Bootstrap 5'
  const road = 'The Frontend Roadmap'
  const blog = 'Blog'
  const initialDisplayPosts = []
  const [searchValue, setSearchValue] = useState('')
  const filteredProjects = projectsData.map((project) => {
    if (project.title == b5 || road || blog) {
      console.log(project.title)
      return project
    }
  })
  console.log(filteredProjects)

  const displayProjects =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredProjects

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
            <span className="text-3xl" role="img" aria-label="star">
              ⭐
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
            {projectsData.map((d) => (
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
        </div>
      </div>
    </>
  )
}
