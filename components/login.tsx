import { sql } from '@vercel/postgres'
import { timeAgo } from '@/lib/utils'
import Image from 'next/image'
import ExpandingArrow from '@/components/expanding-arrow'
import RefreshButton from './refresh-button'
import { seed } from '@/lib/seed'

export default async function Login() {
  let data
  let startTime = Date.now()

  try {
    data = await sql`SELECT * FROM users`
  } catch (e: any) {
    if (e.message === `relation "users" does not exist`) {
      console.log(
        'Table does not exist, creating and seeding it with dummy data now...'
      )
      // Table is not created yet
      await seed()
      startTime = Date.now()
      data = await sql`SELECT * FROM users`
    } else {
      throw e
    }
  }

  const { rows: users } = data
  const duration = Date.now() - startTime

  return (
    <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Usuarios</h2>
          <p className="text-sm text-gray-500">
            Se han encontrado {users.length} usuarios en {duration}ms
          </p>
        </div>
        <RefreshButton />
      </div>
      <div className="divide-y divide-gray-900/5">
        {users.map((user) => (
          <div
            key={user.name}
            className="flex items-center justify-between py-3"
          >
            <div className="flex items-center space-x-4">
              <img
                src={user.image}
                alt={user.name}
                width={48}
                height={48}
                className="rounded-full ring-1 ring-gray-900/5"
              />
              <div className="space-y-1">
                <p className="font-medium leading-none">{user.name}</p>
                <p className="text-sm text-gray-500">Correo: {user.email}</p>
                <p className="text-sm text-gray-500">Contraseña: {user.password}</p>
              </div>
            </div>
            <p className="text-sm text-gray-500">{timeAgo(user.createdAt)}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center space-x-5 pt-10 mt-10 border-t border-gray-300 w-full max-w-xl text-gray-600">
          <Link
          href="https://vercel.com/templates/next.js/postgres-starter"
          className="group mt-20 sm:mt-0 rounded-full flex space-x-1 bg-white/30 shadow-sm ring-1 ring-gray-900/5 text-gray-600 text-sm font-medium px-10 py-2 hover:shadow-lg active:shadow-sm transition-all"
          >
          Iniciar sesión
          <ExpandingArrow />
        </Link>
      </div>

    </div>
  )
}
