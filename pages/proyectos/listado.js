import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import Link from '@/components/Link'
import { PageSeo } from '@/components/SEO'
import { SearchIcon } from '@/components/icons'

export default function ListProjects() {
  const initialDisplayPosts = []
  const [searchValue, setSearchValue] = useState('')
  const filteredProjects = projectsData.filter((project) => {
    const searchContent = project.tags
    return searchContent.join().includes(searchValue.toLowerCase())
  })

  const displayProjects =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredProjects

  return (
    <>
      <PageSeo
        title={'Todos los proyectos'}
        description={`Todos los proyectos - ${siteMetadata.title}`}
        url={`${siteMetadata.siteUrl}/proyectos/todos`}
      />
      <div>
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Todos los proyectos
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Puedes utilizar el buscador para filtrar por skill. También puedes volver a ver mis{' '}
            <Link
              className="font-bold text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-1"
              href="/proyectos"
            >
              proyectos destacados
            </Link>
            <span role="img" aria-label="star">
              📌
            </span>
          </p>
          <div className="relative">
            <input
              aria-label="Buscar proyectos"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Buscar proyecto"
              className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-100"
            />
            <SearchIcon className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300" />
          </div>
        </div>
        <hr className="w-full border-1 border-gray-200 dark:border-gray-800 pb-5" />
        <div className="container pb-12">
          {!filteredProjects.length && (
            <div className="text-center py-10">
              <p>No se han encontrado entradas</p>
            </div>
          )}
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 xl:grid-cols-3 xl:gap-5">
            {displayProjects.map((d) => (
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
          <div className="flex justify-start text-base font-medium leading-6 pt-10">
            <Link
              href="/proyectos"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-bold"
              aria-label="todos los proyectos"
            >
              &larr; Proyectos destacados
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
