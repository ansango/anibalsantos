import {
  SiMailDotRu as Mail,
  SiTwitter as Twitter,
  SiWhatsapp as Whatsapp,
  SiTelegram as Telegram,
} from 'react-icons/si'

const components = {
  mail: Mail,
  twitter: Twitter,
  whatsapp: Whatsapp,
  telegram: Telegram,
}

const shareURL = ({ kind, params }) => {
  const urls = {
    mail: `mailto:?subject=${params.title}&body=${params.url}`,
    twitter: `https://twitter.com/intent/tweet?url=${params.url}&text=${params.title}&via=iamasync_&hashtags=${params.tags}`,
    whatsapp: params.isMobile
      ? `https://api.whatsapp.com/send?&text=${params.title}%20${params.url}`
      : `https://web.whatsapp.com/send?text=${params.url}`,
    telegram: `https://telegram.me/share/url?url=${params.url}&text=${params.text}`,
  }
  return urls[kind]
}

const SocialShare = ({ kind, params, size }) => {
  if (!kind) return null
  const SocialSvg = components[kind]
  const url = shareURL({ kind: kind, params: params })
  return (
    <a href={url} className="mx-1" target="_blank" rel="noopener noreferrer">
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current text-gray-700 dark:text-gray-200 hover:text-yellow-500 dark:hover:text-yellow-400 h-${size} w-${size}`}
      />
    </a>
  )
}

export default SocialShare
