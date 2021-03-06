import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href, stack }) => {
  const github = stack.filter((e) => e.key === 'github')
  const notGithub = stack.filter((e) => e.key !== 'github')
  return (
    <div className="px-5 sm:px-20 md:px-0">
      <div className="h-full border-2 border-gray-200 border-opacity-60 dark:border-gray-700 rounded-md overflow-hidden">
        {href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="lg:h-48 md:h-36 object-cover object-center"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="lg:h-48 md:h-36 object-cover object-center"
            width={544}
            height={306}
          />
        )}
        <div className="p-6">
          <h2 className="text-2xl font-bold leading-8 tracking-tight mb-3">
            {href ? (
              <span className="flex items-center">
                <Link href={href} aria-label={`Link to ${title}`} className="mr-3">
                  {title}
                </Link>
                <span>{github}</span>
              </span>
            ) : (
              <span>
                title
                <span>{github}</span>
              </span>
            )}
          </h2>
          <p className="prose text-gray-500 max-w-none dark:text-gray-400 mb-3">{description}</p>
          {notGithub && <div className="flex mb-3">{notGithub}</div>}
          {href && (
            <Link
              href={href}
              className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label={`Link to ${title}`}
            >
              Ir al proyecto &rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card

export const CardCarousel = ({ title, description, imgSrc, href, stack }) => {
  const github = stack.filter((e) => e.key === 'github')
  const notGithub = stack.filter((e) => e.key !== 'github')
  return (
    <div className="px-5 sm:px-20 md:px-0">
      <div className="h-full border-2 border-gray-200 border-opacity-60 dark:border-gray-700 rounded-md overflow-hidden">
        {href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="lg:h-48 md:h-36 object-cover object-center"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="lg:h-48 md:h-36 object-cover object-center"
            width={544}
            height={306}
          />
        )}
        <div className="px-3 py-5">
          <h4 className="text-xl font-semibold leading-8 tracking-tight">
            {href ? (
              <span className="flex items-center">
                <Link href={href} aria-label={`Link to ${title}`} className="mr-3 truncate">
                  {title}
                </Link>
                <span>{github}</span>
              </span>
            ) : (
              <span className="truncate">
                {title}
                <span>{github}</span>
              </span>
            )}
          </h4>
        </div>
      </div>
    </div>
  )
}
