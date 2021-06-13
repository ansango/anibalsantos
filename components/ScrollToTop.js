import { ImArrowUp2 as ARROW } from 'react-icons/im'
import { useEffect, useState } from 'react'
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
    <div className="fixed bottom-6 right-10">
      {isVisible && (
        <button
          className="bg-yellow-300 hover:bg-yellow-200 text-yellow-600 font-bold px-3 py-2 border-b-4 border-yellow-500 hover:border-blue rounded-md"
          onClick={scrollToTop}
          role={role}
        >
          <ARROW />
        </button>
      )}
    </div>
  )
}
export default ScrollToTop
