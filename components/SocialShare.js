import { MailIcon, TelegramIcon, TwitterIcon, WhatsappIcon } from './icons'
import Link from '@/components/Link'
const components = {
  mail: MailIcon,
  twitter: TwitterIcon,
  whatsapp: WhatsappIcon,
  telegram: TelegramIcon,
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
  const SocialIcon = components[kind]
  const url = shareURL({ kind: kind, params: params })
  return (
    <Link href={url} className="mx-1">
      <span className="sr-only">{kind}</span>
      <SocialIcon
        className={`fill-current text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 h-${size} w-${size}`}
      />
    </Link>
  )
}

export default SocialShare
