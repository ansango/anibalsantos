import {
  SiMailDotRu as Mail,
  SiGithub as Github,
  SiLinkedin as Linkedin,
  SiInstagram as Instagram,
} from 'react-icons/si'

const components = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
}

const SocialIcon = ({ kind, href, size = 8 }) => {
  if (!href) return null

  const SocialSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current text-gray-700 dark:text-gray-200 hover:text-yellow-500 dark:hover:text-yellow-400 h-${size} w-${size}`}
      />
    </a>
  )
}

export default SocialIcon
