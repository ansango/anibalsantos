import { useEffect, useState } from 'react'
import { AUpIcon } from './icons'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 600) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const role = 'button'
  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-6 right-10 bg-primary-300 hover:bg-primary-200 text-primary-600 font-bold px-3 py-2 border-b-4 border-primary-500 hover:border-blue rounded-md opacity-0 transition-opacity duration-700"
          style={{
            opacity: isVisible ? '100' : '0',
            pointerEvents: !isVisible ? 'none' : 'initial',
          }}
          onClick={scrollToTop}
          role={role}
        >
          <AUpIcon />
        </button>
      )}
    </>
  )
}
export default ScrollToTop
