import Link from '@/components/Link'

import {
  AngularIcon,
  BootstrapIcon,
  BulmaIcon,
  Css3Icon,
  GithubIcon,
  HerokuIcon,
  Html5Icon,
  JsIcon,
  LeafletIcon,
  MarkdownIcon,
  MaterialIcon,
  MongoIcon,
  NetlifyIcon,
  NextIcon,
  NodeIcon,
  NuxtIcon,
  ReactIcon,
  ReduxIcon,
  SassIcon,
  TailwindIcon,
  VercelIcon,
  VueIcon,
} from '@/components/icons'
import { compareById } from '@/lib/utils/compare'

const Repo = ({ url }) => {
  return (
    <Link href={url}>
      <GithubIcon size={sizeIcons} className="dark:text-gray-100" />
    </Link>
  )
}

const sizeIcons = 22
const icons = {
  html: <Html5Icon key="html" size={sizeIcons} color="#EF6026" className="mr-3" />,
  sass: <SassIcon key="sass" size={sizeIcons} color="#C56394" className="mr-3" />,
  js: <JsIcon key="js" size={sizeIcons} color="#FBD600" className="mr-3" />,
  netlify: <NetlifyIcon key="netlify" size={sizeIcons} color="#27BDB8" className="mr-3" />,
  next: <NextIcon key="next" size={sizeIcons} className="dark:text-gray-100 mr-3" />,
  tailwind: <TailwindIcon key="tailwind" size={sizeIcons} color="#27BDB8" className="mr-3" />,
  markdown: <MarkdownIcon key="markdown" size={sizeIcons} className="dark:text-gray-100 mr-3" />,
  vercel: <VercelIcon key="vercel" size={sizeIcons} className="dark:text-gray-100 mr-3" />,
  angular: <AngularIcon key="angular" size={sizeIcons} color="#DD0031" className="mr-3" />,
  material: <MaterialIcon key="material" size={sizeIcons} className="dark:text-gray-100 mr-3" />,
  redux: <ReduxIcon key="redux" size={sizeIcons} color="#764ABC" className="mr-3" />,
  react: <ReactIcon key="react" size={sizeIcons} color="#62DBFB" className="mr-3" />,
  bootstrap: <BootstrapIcon key="bootstrap" size={sizeIcons} color="#8913FC" className="mr-3" />,
  node: <NodeIcon key="node" size={sizeIcons} color="#7FC727" className="mr-3" />,
  mongo: <MongoIcon key="mongo" size={sizeIcons} color="#138D4E" className="mr-3" />,
  heroku: <HerokuIcon key="heroku" size={sizeIcons} color="#5719B3" className="mr-3" />,
  nuxt: <NuxtIcon key="nuxt" size={sizeIcons} color="#3B8070" className="mr-3" />,
  vue: <VueIcon key="vue" size={sizeIcons} color="#3FB27F" className="mr-3" />,
  css3: <Css3Icon key="css" size={sizeIcons} color="#0270BA" className="mr-3" />,
  bulma: <BulmaIcon key="bulma" size={sizeIcons} color="#27BDB8" className="mr-3" />,
  leaflet: <LeafletIcon key="leaflet" size={sizeIcons} color="#27BDB8" className="mr-3" />,
}

const projectsData = [
  {
    id: 1,
    title: 'The Frontend Roadmap',
    description:
      'Landing page creada from scratch en Vue 2, Parcel v1, BulmaCSS. Desplegado en Netlify.',
    imgSrc: '/static/images/roadmap.png',
    href: 'https://frontend-roadmap.netlify.app/',
    stack: [
      icons.vue,
      icons.bulma,
      icons.netlify,
      <Repo key="github" url={'https://github.com/ansango/parcel-vue-bulma-netlify'} />,
    ],
    tags: ['vue', 'parcel', 'bulmacss', 'netlify', 'landing', 'frontend', 'roadmap'],
  },
  {
    id: 2,
    title: 'Retro Pair Game',
    description:
      'Un juego sencillo de memoria, escrito en ES6 y NESCSS para darle un toque retro. Desplegado en Netlify.',
    imgSrc: '/static/images/retro.jpg',
    href: 'https://retro-pair.netlify.app/',
    stack: [
      icons.html,
      icons.css3,
      icons.js,
      icons.netlify,
      <Repo key="github" url={'https://github.com/ansango/retro-pair'} />,
    ],
    tags: ['html', 'js', 'javascript', 'css', 'nescss', 'netlify', 'game', 'frontend', 'retro'],
  },
  {
    id: 3,
    title: 'Shopping List',
    description:
      'Lista de la compra, instalable con PWA y LocalStorage, desarrollada con Nuxt.js, Vuex y TailwindCSS. Desplegado en Netlify.',
    imgSrc: '/static/images/nuxt.jpg',
    href: 'https://nuxt-shopping-list.netlify.app/',
    stack: [
      icons.nuxt,
      icons.vue,
      icons.tailwind,
      icons.netlify,
      <Repo key="github" url={'https://github.com/ansango/nuxt-shopping-list'} />,
    ],
    tags: [
      'nuxt',
      'vue',
      'taiwind',
      'netlify',
      'pwa',
      'service',
      'worker',
      'frontend',
      'shopping',
      'list',
    ],
  },

  {
    id: 4,
    title: 'Neo Punk Api',
    description:
      'Pequeña api rest pública, de las cervezas BrewDog realizada en Express y Mongo DB, consumida por el proyecto NgBrew. Desplegado en Netlify.',
    imgSrc: '/static/images/brew2.jpg',
    href: 'https://neopunkapi.herokuapp.com/',
    stack: [
      icons.node,
      icons.mongo,
      icons.heroku,
      <Repo key="github" url={'https://github.com/ansango/neopunkapi'} />,
    ],
    tags: [
      'node',
      'express',
      'heroku',
      'mongodb',
      'api',
      'rest',
      'backend',
      'js',
      'javascript',
      'neo',
      'punk',
    ],
  },

  {
    id: 5,
    title: 'Undefined Band - Bootstrap 5',
    description:
      'Landing de producto, creada con Parcel Bundler, React, Bootstrap 5 y Sass, ITCSS, OOCSS, from scratch. Desplegado en Netlify.',
    imgSrc: '/static/images/band.jpg',
    href: 'https://band-uoc.netlify.app/',
    stack: [
      icons.react,
      icons.sass,
      icons.bootstrap,
      icons.netlify,
      <Repo key="github" url={'https://github.com/ansango/band-uoc'} />,
    ],
    tags: [
      'parcel',
      'react',
      'bootstrap',
      'sass',
      'netlify',
      'itcss',
      'oocss',
      'frontend',
      'undefined',
      'band',
    ],
  },
  {
    id: 6,
    title: 'Undefined Band - TailwindCSS',
    description:
      'Landing de producto, creada con Parcel Bundler, React, TailwindCSS y Sass, versión reducida y refactorizada. Desplegado en Netlify.',
    imgSrc: '/static/images/band2.jpg',
    href: 'https://band-uoc-tailwind.netlify.app/',
    stack: [
      icons.react,
      icons.sass,
      icons.tailwind,
      icons.netlify,
      <Repo key="github" url={'https://github.com/ansango/band-uoc-tailwind'} />,
    ],
    tags: [
      'parcel',
      'react',
      'tailwind',
      'sass',
      'netlify',
      'itcss',
      'oocss',
      'frontend',
      'undefined',
      'band',
    ],
  },
  {
    id: 7,
    title: 'NgMaterial',
    description:
      'Aplicación de gestión con roles de usuario y administrador, desarrollada en Angular 12, Material, y NGRX. Desplegado en Netlify. Puedes probar a registrarte como turista o empresa!',
    imgSrc: '/static/images/material.png',
    href: 'https://ng-material.netlify.app/',
    stack: [
      icons.angular,
      icons.redux,
      icons.material,
      icons.netlify,
      <Repo key="github" url={'https://github.com/ansango/ng-material'} />,
    ],
    tags: ['angular', 'material', 'netlify', 'redux', 'ngrx', 'frontend', 'ng'],
  },

  {
    id: 8,
    title: 'NgBrew',
    description:
      'Pequeña aplicación desarrollada en Angular 12 y TailwindCSS, con implementación de Service Workers y PWA, instalable y accesible offline. Desplegado en Netlify.',
    imgSrc: '/static/images/brew.jpg',
    href: 'https://ng-brew.netlify.app/',
    stack: [
      icons.angular,
      icons.tailwind,
      icons.netlify,
      <Repo key="github" url={'https://github.com/ansango/ng-brew'} />,
    ],
    tags: ['angular', 'tailwind', 'netlify', 'service', 'worker', 'pwa', 'frontend', 'ng', 'brew'],
  },
  {
    id: 9,
    title: 'Blog',
    description:
      'Mi blog actual, en el que estás navegando. Desarrollado en Next.js, TailwindCSS, basado en Markdown y mejorado con MDX. Desplegado en Vercel.',
    imgSrc: '/static/images/next.jpg',
    href: '/',
    stack: [
      icons.next,
      icons.tailwind,
      icons.markdown,
      icons.vercel,
      <Repo key="github" url={'https://github.com/ansango/anibalsantos'} />,
    ],
    tags: ['markdown', 'react', 'nextjs', 'tailwind', 'vercel', 'frontend', 'blog'],
  },
  {
    id: 10,
    title: 'Expense Tracker',
    description: `Pequeña aplicación realizada en React para controlar los gastos diarios y crear una UI Base para arquitectura dinámica. Desarrollada en React y Tailwind. Desplegada en Vercel.`,
    imgSrc: '/static/images/react-tailwind.jpeg',
    href: 'https://expense-tracker-react-app.vercel.app/',
    stack: [
      icons.react,
      icons.tailwind,
      icons.vercel,
      <Repo key="github" url={'https://github.com/ansango/expense-tracker'} />,
    ],
    tags: ['react', 'js', 'javascript', 'tailwind', 'tailwind', 'frontend', 'expense', 'tracker'],
  },
  {
    id: 11,
    title: 'Meal Tracker',
    description: `Aplicación full stack para el seguimiento semanal de comidas y recetas. Desarrollada en React, Node (Express), Mongo y Tailwind. Desplegada en Vercel y Heroku.`,
    imgSrc: '/static/images/mern.jpeg',
    href: 'https://meal-tracker-front.vercel.app/',
    stack: [
      icons.react,
      icons.tailwind,
      icons.node,
      icons.mongo,
      icons.vercel,
      icons.heroku,
      <Repo key="github" url={'https://github.com/ansango/meal-tracker-front'} />,
    ],
    tags: [
      'react',
      'js',
      'javascript',
      'tailwind',
      'node',
      'express',
      'mongodb',
      'tailwind',
      'frontend',
      'backend',
      'full stack',
      'meal',
      'tracker',
    ],
  },
  {
    id: 12,
    title: 'Ansango Photo',
    description:
      'Portfolio de fotografía realizado con Next, basado en Markdown y MDX, Leaflet y TailwindCSS. Desplegado en Vercel.',
    imgSrc: '/static/images/photo-blog.jpg',
    href: 'https://ansango-photo.vercel.app/',
    stack: [
      icons.next,
      icons.markdown,
      icons.tailwind,
      icons.leaflet,
      icons.vercel,
      <Repo key="github" url={'https://github.com/ansango/anibalsantos-photo'} />,
    ],
    tags: ['markdown', 'react', 'nextjs', 'tailwind', 'vercel', 'frontend', 'blog', 'leaflet'],
  },
  {
    id: 13,
    title: 'GIF React',
    description:
      'Mini aplicación para consumir GIFs de la API de GIPHY. Desarrollada en React, Tailwind y desplegada en Vercel.',
    imgSrc: '/static/images/giphy.jpg',
    href: 'https://gif-react.vercel.app/',
    stack: [
      icons.react,
      icons.tailwind,
      icons.vercel,
      <Repo key="github" url={'https://github.com/ansango/gif-react'} />,
    ],
    tags: ['react', 'tailwind', 'vercel', 'frontend'],
  },
  {
    id: 14,
    title: 'Hooks App',
    description:
      'Resumen del funcionamiento de los hooks de React en una aplicación, realizada con React y Bootstrap 5.',
    imgSrc: '/static/images/hooks.png',
    href: 'https://hooks-app-two.vercel.app/',
    stack: [
      icons.react,
      icons.bootstrap,
      icons.vercel,
      <Repo key="github" url={'https://github.com/ansango/hooks-app'} />,
    ],
    tags: ['react', 'bootstrap', 'vercel', 'frontend'],
  },
  {
    id: 15,
    title: 'Curriculum',
    description: `Mi Curriculum Vitae desarrollado en ES6, Sass, y HTML. Desplegado en Netlify. Utilizando una estructura de maquetación OOCSS e ITCSS para mejorar mantenimiento.`,
    imgSrc: '/static/images/profile.png',
    href: 'https://anibalsantos-resume.netlify.app/',
    stack: [
      icons.html,
      icons.js,
      icons.sass,
      icons.netlify,
      <Repo key="github" url={'https://github.com/ansango/cv-uoc'} />,
    ],
    tags: [
      'html',
      'js',
      'javascript',
      'sass',
      'itcss',
      'oocss',
      'netlify',
      'frontend',
      'cv',
      'curriculum',
      'resume',
    ],
  },
]

projectsData.sort(compareById)

export default projectsData
