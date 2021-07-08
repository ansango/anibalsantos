import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import Link from '@/components/Link'
import { PageSeo } from '@/components/SEO'
export default function AllProjects() {
  const initialDisplayPosts = []
  const [searchValue, setSearchValue] = useState('')
  const filteredProjects = projectsData.filter((project) => {
    const searchContent = project.tags
    return searchContent.join().includes(searchValue.toLowerCase())
  })

  const displayProjects =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredProjects

  fetch('https://github.com/users/ansango/contributions?to=2021-12-31').then()
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
            Puedes utilizar el buscador para filtrar por skill técnico o título. También puedes
            volver a ver mis{' '}
            <Link
              className="font-bold text-yellow-500 hover:text-yellow-600 dark:hover:text-yellow-400 mr-1"
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
              className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <div className="container pb-12 pt-6">
          {!filteredProjects.length && (
            <div className="text-center py-10">
              <p>No se han encontrado entradas</p>
            </div>
          )}
          <div className="flex flex-wrap -m-4">
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
              className="text-yellow-500 hover:text-yellow-600 dark:hover:text-yellow-400"
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
