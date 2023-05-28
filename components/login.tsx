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
        {palabrasHoy.map((palabraHoy) => (
          <p key={palabraHoy.palabra} className="font-medium leading-none miku-p"><b>Hatsune Miku dice: </b> <br/> &ldquo;{palabraHoy.palabra}&rdquo;</p>
        ))}
    </div>
  )
}
