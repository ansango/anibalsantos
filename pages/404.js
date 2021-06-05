import Link from '@/components/Link'

export default function FourZeroFour() {
  return (
    <div className="flex flex-col items-start justify-start md:justify-center md:items-center md:flex-row md:space-x-6 md:mt-24">
      <div className="pt-6 pb-8 space-x-2 md:space-y-5">
        <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:text-8xl md:leading-14 md:border-r-2 md:px-6">
          404
        </h1>
      </div>
      <div className="max-w-md">
        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">Ups</p>
        <p className="mb-8">
          Lo siento, no se si no me acuerdo, o simplemente parece que definitivamente he olvidado
          eso.
        </p>
        <Link href="/">
          <button className="inline px-4 py-2 text-sm font-medium leading-5 text-yellow-600 transition-colors duration-150 bg-yellow-300 border border-transparent rounded-lg shadow focus:outline-none focus:shadow-outline-yellow hover:bg-yellow-700 dark:hover:bg-yellow-500">
            Inicio
          </button>
        </Link>
      </div>
    </div>
  )
}
