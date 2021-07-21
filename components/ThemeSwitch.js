import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { HiSun as SunIcon, HiMoon as MoonIcon } from 'react-icons/hi'
const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="p-1 mx-1 rounded sm:ml-4"
      onClick={() => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
        <SunIcon size={20} />
      ) : (
        <MoonIcon size={20} />
      )}
    </button>
  )
}

export default ThemeSwitch
