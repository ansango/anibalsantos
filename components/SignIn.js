import { signIn } from 'next-auth/client'
import { GithubIcon, GoogleIcon } from './icons'

const SignIn = () => {
  return (
    <div className="flex justify-center py-5">
      <div>
        <p className="font-bold pb-5">
          Inicia sesión para comentar{' '}
          <span role="img" aria-label="smile">
            😄
          </span>
        </p>

        <div className="flex justify-center">
          <button
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold px-3 py-2 border-b-4 border-gray-500 rounded-md mr-3"
            onClick={() => {
              signIn('github')
            }}
          >
            <span className="flex items-center">
              <span className="mr-2">Github</span>
              <GithubIcon size={15} />
            </span>
          </button>
          <button
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-3 py-2 border-b-4 border-blue-500 rounded-md mr-3"
            onClick={() => {
              signIn('google')
            }}
          >
            <span className="flex items-center">
              <span className="mr-2">Google</span>
              <GoogleIcon size={15} />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
export default SignIn
