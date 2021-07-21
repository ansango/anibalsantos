const SendErrors = ({ params }) => {
  const url = `mailto:anibalsantosgo@gmail.com?subject=Errores en ${params.title}&body=He encontrado errores en la entrada: ${params.url}, son los siguientes:`
  return (
    <a
      href={url}
      className="mx-1 text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400"
      target="_blank"
      rel="noopener noreferrer"
    >
      ¿Has encontrado errores?
    </a>
  )
}

export default SendErrors
