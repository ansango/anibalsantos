import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import headerNavLinks from '@/data/headerNavLinks'
import Coffee from '@/components/Coffee'
import Line from '@/components/Line'

export default function Footer() {
  return (
    <footer>
      <div className="pb-10">
        <Line />
      </div>
      <div className="pb-10">
        <div className="space-y-4">
          {headerNavLinks.map((link, key) => {
            return (
              <Link className="block" key={key} href={link.href}>
                {link.title}
              </Link>
            )
          })}
        </div>
        <div className="flex flex-col mt-5 space-y-4 md:flex-row md:items-center md:justify-between md:space-x-4 ">
          <div>
            <Link href="/">{siteMetadata.title}</Link>
            <Coffee />
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-2 pt-8 md:p-0">
            <SocialIcon kind="photo" href={'https://ansango-photo.vercel.app'} size="6" />
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="5" />
            <SocialIcon kind="github" href={siteMetadata.github} size="5" />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="5" />
            <SocialIcon kind="instagram" href={siteMetadata.instagram} size="5" />
          </div>
        </div>
      </div>
    </footer>
  )
}
