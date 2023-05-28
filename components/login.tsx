import { sql } from '@vercel/postgres'
import { timeAgo } from '@/lib/utils'
import Link from 'next/link'
import ExpandingArrow from '@/components/expanding-arrow'

export default async function Login() {


  return (
    <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
      <div className="flex justify-center space-x-5 pt-10 mt-10 border-t border-gray-300 w-full max-w-xl text-gray-600">
          <Link
          href="https://vercel.com/templates/next.js/postgres-starter"
          className="group mt-20 sm:mt-0 rounded-full flex space-x-1 bg-white/30 shadow-sm ring-1 ring-gray-900/5 text-gray-600 text-sm font-medium px-10 py-2 hover:shadow-lg active:shadow-sm transition-all"
          >
          Iniciar sesión
          <ExpandingArrow />
        </Link>
        <RefreshButton />
      </div>
    </div>
  )
}
