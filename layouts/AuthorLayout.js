import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import { PageSeo } from '@/components/SEO'
import Line from '@/components/Line'
import TimeLine from '@/components/TimeLine'
import ContributionsChart from '@/components/ContributionsChart'
import { GithubIcon, SpotifyIcon } from '@/components/icons'
import TopArtists from '@/components/TopArtists'
import TopTracks from '@/components/TopTracks'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company } = frontMatter

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
          <div className="py-8 prose text-gray-500 dark:prose-dark max-w-none xl:col-span-2 text-lg sm:text-xl leading-7 dark:text-gray-400">
            {children}
          </div>
          <div className="py-8">
            <div className="py-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl leading-9 sm:leading-10 md:leading-14 font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
                Timeline{' '}
                <span role="img" aria-label="">
                  ⏳
                </span>
              </h2>
              <p className="pt-8 pb-8 prose text-lg text-gray-500 dark:prose-dark max-w-none xl:col-span-2 sm:text-xl leading-7 dark:text-gray-400">
                Estos son algunos de los eventos que han ido sucediendome a lo largo de mi vida.
                Esta es básicamente una pequeña Timeline que ha marcado un antes y un después.
              </p>
              <Line />
              <TimeLine />
            </div>

            <div className="py-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl leading-9 sm:leading-10 md:leading-14 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 flex items-center">
                Contribuciones <GithubIcon className="ml-3" />
              </h2>
              <p className="pt-8 pb-8 prose text-lg text-gray-500 dark:prose-dark max-w-none xl:col-span-2 sm:text-xl leading-7 dark:text-gray-400">
                Como me encanta mostrar algunos datos relevantes, he pensado que sería interesante
                hacer una pequeña gráfica de este año {new Date().getFullYear()}, mostrándote cuanto
                contribuyo al mes, en Github.
              </p>
              <Line />
              <div className="py-8">
                <ContributionsChart />
              </div>
            </div>
            <div className="py-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl leading-9 sm:leading-10 md:leading-14 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 flex items-center">
                Música que escucho <SpotifyIcon className="ml-3 text-green-500" />
              </h2>
              <p className="pt-8 pb-8 prose text-lg text-gray-500 dark:prose-dark max-w-none xl:col-span-2 sm:text-xl leading-7 dark:text-gray-400">
                Me encanta escuchar música a todas horas. Desde que me levanto hasta que me acuesto
                tengo mi Spotify funcionando, aquí puedes ver mi top 10 de canciones y artistas.
              </p>
              <Line />
              <div className="py-8">
                <div className="pb-8">
                  <h3 className="text-xl sm:text-xl md:text-2xl leading-9 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 pb-8">
                    Top Tracks
                  </h3>
                  <TopTracks />
                </div>
                <div className="pt-8">
                  <h3 className="text-xl sm:text-xl md:text-2xl leading-9 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 pb-8">
                    Top Artistas
                  </h3>
                  <TopArtists />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
