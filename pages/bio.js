import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'

export default function Bio() {
  return (
    <>
      <PageSeo
        title={'Bio'}
        description={`Bio - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/bio`}
      />
      <div className="pb-12">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Bio
          </h1>
        </div>
        <div className="items-start space-y-2">
          <div className="flex flex-col items-center pt-8 space-x-2 md:flex-r">
            <img src={siteMetadata.image} alt="avatar" className="w-48 h-48 rounded-full" />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">Frontend Mid Developer</div>

            <Link href={'https://www.everis.com/global/en'}>Everis</Link>

            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="5" />
              <SocialIcon kind="github" href={siteMetadata.github} size="5" />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="5" />
              <SocialIcon kind="instagram" href={siteMetadata.instagram} size="5" />
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>
              Me llamo Aníbal, actualmente resido en Salamanca, donde trabajo como desarrollador
              Frontend en <Link href={'https://www.everis.com/global/en'}>Everis</Link>, para el
              proyecto de <Link href={'https://iberdrola.es'}>Iberdrola</Link>, en el departamento
              de web comercial.
            </p>
            <p>
              Me licencié en Derecho en la{' '}
              <Link href={'https://www.usal.es/'}>Universidad de Salamanca</Link> finalizando mi
              carrera universitaria en la{' '}
              <Link href={'https://www.uniroma3.it/'}>Università di Roma Tre</Link>, en Roma. Un día
              cambié de opinión y decidí reinventarme y empecé a estudiar programación. Actualmente
              me encuentro finalizando el Máster de Desarrollo de Aplicaciones Web de la{' '}
              <Link href={'https://www.uoc.edu/portal/en/index.html'}>
                Universitat Oberta de Catalunya
              </Link>
              .
            </p>
            <p>
              En este momento me encuentro feliz de haber cambiado y dedicarme a lo que me gusta:
              programar, crear contenido e interfaces de usuario y la tecnología en general.
            </p>
            <p>
              Tengo muchas otras pasiones, como la fotografía, el deporte, los animales o la
              gastronomía. No se si el empezar a escribir en un blog se convertirá en otra de ellas.
            </p>
            <p>
              Por último, no pretendo aburrirte con mi stack tecnológico, puedes verlo{' '}
              <Link href={'https://anibalsantos-resume.netlify.app/'}>aqui</Link>. Se me olvidaba
              comentar que soy un melómano increíble. Me encanta la música y engullo tanta música
              como frameworks de frontend.
            </p>
            <p>
              Si quieres <Link href={`mailto:${siteMetadata.email}`}>preguntarme</Link> cualquier
              cosa, estaré encantado de escucharte.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
