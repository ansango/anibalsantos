import Link from '@/components/Link'
import { CoffeeIcon } from './icons'
const Coffee = () => {
  return (
    <Link href="https://www.buymeacoffee.com/ansango" className="mx-2">
      <span role="img" aria-label="coffee" className="text-xl">
        ☕
      </span>
    </Link>
  )
}
export default Coffee
