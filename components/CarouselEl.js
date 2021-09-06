import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 992 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 992, min: 678 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
}

const CarouselEl = ({ children, title = null, subtitle = null }) => {
  return (
    <div className="pt-10 pb-20">
      {title && (
        <div className="pt-6 pb-5">
          <h2 className="text-2xl sm:leading-10 md:leading-14 font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 ">
            {title}
          </h2>
          {subtitle && (
            <p className="sm:text-lg leading-7 text-gray-500 dark:text-gray-400">{subtitle}</p>
          )}
        </div>
      )}
      <Carousel responsive={responsive}>{children}</Carousel>
    </div>
  )
}

export default CarouselEl
