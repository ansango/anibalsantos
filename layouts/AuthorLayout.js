import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import { PageSeo } from '@/components/SEO'
import Line from '@/components/Line'
import TimeLine from '@/components/TimeLine'
import ContributionsChart from '@/components/ContributionsChart'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = frontMatter

  return (
    <>
      <PageSeo title={`Bio - ${name}`} description={`Bio - ${name}`} />
      <div>
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Bio
          </h1>
        </div>
        <Line />
        <div className="items-start space-y-2">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <Image
              src={avatar}
              alt="avatar"
              width="192px"
              height="192px"
              className="w-48 h-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400 text-lg">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400 text-lg">{company}</div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="photo" href={'https://ansango-photo.vercel.app'} size="6" />
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="5" />
              <SocialIcon kind="github" href={siteMetadata.github} size="5" />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="5" />
              <SocialIcon kind="instagram" href={siteMetadata.instagram} size="5" />
            </div>
          </div>
          <div className="pt-8 pb-8 prose text-lg text-gray-500 dark:prose-dark max-w-none xl:col-span-2">
            {children}
          </div>

          <TimeLine />

          <p className="pt-8 pb-8 prose text-lg text-gray-500 dark:prose-dark max-w-none xl:col-span-2">
            Como me encanta mostrar algunos datos relevantes, he pensado que sería interesante hacer
            una pequeña gráfica de este año {new Date().getFullYear()}, mostrándote cuanto
            contribuyo al mes, en Github.
          </p>
          <ContributionsChart />
        </div>
      </div>
    </>
  )
}
