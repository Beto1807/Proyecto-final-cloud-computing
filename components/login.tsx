import { sql } from '@vercel/postgres'
import { seed } from '@/lib/seed'

export default async function Login() {
  let mikus;

  try {
    mikus = await sql`SELECT * FROM mikuwords where dia = DATE_PART('doy',CURRENT_DATE)`
  } catch (e: any) {
    if (e.message === `relation "mikuwords" does not exist`) {
      console.log('Table does not exist, creating and seeding it with dummy data now.')
      // Table is not created yet
      await seed()
      mikus = await sql`SELECT * FROM mikuwords where dia = DATE_PART('doy',CURRENT_DATE)`
    } else {
      throw e
    }
  }

  const { rows: palabrasHoy } = mikus

  return (
    <div className="p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full bg-palabra">
      <div className="divide-y divide-gray-900/5">
        {palabrasHoy.map((palabraHoy) => (
          <div
            key={palabraHoy.palabra}
            className="flex items-center justify-between py-3"
          >
            <div className="flex items-center">
              <div className="space-y-1">
                <p className="font-medium leading-none"><b>Hatsune Miku dice: </b>{palabraHoy.palabra}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
