import { sql } from '@vercel/postgres'
import ExpandingArrow from '@/components/expanding-arrow'
import Refresh from './refresh-button'
import { seed } from '@/lib/seed'

export default async function Login() {
  let session = sessionStorage.getItem("name");

  if(!session){
    return (
      <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
        <div className="flex justify-center space-x-5 pt-10 mt-10 border-t border-gray-300 w-full max-w-xl text-gray-600">
          <form className="w-full max-w-lg" onSubmit={handleSubmit}>
            <label htmlFor="#email" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Correo</label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="Ingrese correo"
              type={"email"}
              id="email"
              name="email"
            />

            <label htmlFor="#password" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Contraseña</label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="******************"
              type={"password"}
              id="password"
              name="password"
            />

            <br />

            <div style={{ display: "flex", justifyContent: "center" }}>
              <button type="submit" className="group mt-20 sm:mt-0 rounded-full flex space-x-1 bg-white/30 shadow-sm ring-1 ring-gray-900/5 text-gray-600 text-sm font-medium px-10 py-2 hover:shadow-lg active:shadow-sm transition-all"
              >
                Iniciar sesión
                <ExpandingArrow />
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }else{
    let mikus

    try {
      mikus = await sql`SELECT * FROM MIKUWORDS where dia = DATE_PART('doy',CURRENT_DATE)`
    } catch (e: any) {
      if (e.message === `relation "MIKUWORDS" does not exist`) {
        console.log(
          'Table does not exist, creating and seeding it with dummy data now.'
        )
        // Table is not created ye
        await seed()
        mikus = await sql`SELECT * FROM MIKUWORDS where dia = DATE_PART('doy',CURRENT_DATE)`
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
                  <p className="font-medium leading-none"><b>Miku dice: </b>{palabraHoy.palabra}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

async function handleSubmit() {
  //e.preventDefault();
  //var formData = new FormData(e.target);
  let login

  try {
    //var email = formData.get("email");
    //var pass = formData.get("password");

    if(email && pass){
      var email = document.querySelector('#email').value;
      var pass = document.querySelector('#password').value;
      login = await sql`SELECT * FROM users where email = '${email}' and password = '${pass}'`
    
      let { rows: result } = login
    
      if (result.length >= 1) {
        var nam = result[0].name
        sessionStorage.setItem("name", nam);
        Refresh()
      }
    }

  } catch (e: any) {
    console.log(e.message)
  }
}
