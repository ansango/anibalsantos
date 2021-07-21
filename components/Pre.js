import { useState, useRef } from 'react'
import { ClipCheckIcon, ClipIcon } from './icons'

const Pre = (props) => {
  const textInput = useRef(null)
  const [hovered, setHovered] = useState(false)
  const [copied, setCopied] = useState(false)

  const onEnter = () => {
    setHovered(true)
  }
  const onExit = () => {
    setHovered(false)
    setCopied(false)
  }
  const onCopy = () => {
    setCopied(true)
    navigator.clipboard.writeText(textInput.current.textContent)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <div ref={textInput} onMouseEnter={onEnter} onMouseLeave={onExit} className="relative">
      {hovered && (
        <button
          aria-label="Copy code"
          type="button"
          className={`absolute right-2 top-2 w-8 h-8 p-1 rounded border-2 bg-gray-700 dark:bg-gray-800 ${
            copied
              ? 'focus:outline-none focus:border-green-400 border-green-400'
              : 'border-gray-300'
          }`}
          onClick={onCopy}
        >
          {copied ? (
            <ClipCheckIcon size={20} className="text-green-400" />
          ) : (
            <ClipIcon size={20} className="text-white" />
          )}
        </button>
      )}

      <pre>{props.children}</pre>
    </div>
  )
}

export default Pre
