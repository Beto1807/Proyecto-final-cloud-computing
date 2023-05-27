import { sql } from '@vercel/postgres'

export async function seed() {
  const createTable = await sql`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      image VARCHAR(255),
      "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
    `

  console.log(`Created "users" table`)

  const users = await Promise.all([
    sql`
          INSERT INTO users (name, password, email, image)
          VALUES ('Alberto Rodríguez Cázares', 1234, 'L19550796@chihuahua2.tecnm.mx', 'https://pbs.twimg.com/profile_images/1576257734810312704/ucxb4lHy_400x400.jpg')
          ON CONFLICT (email) DO NOTHING;
      `,
    sql`
          INSERT INTO users (name, password, email, image)
          VALUES ('Nicole Johana Bibiano Ochoa', abcd, 'L19550731@chihuahua2.tecnm.mx', 'https://pbs.twimg.com/profile_images/1587647097670467584/adWRdqQ6_400x400.jpg')
          ON CONFLICT (email) DO NOTHING;
      `,
    sql`
          INSERT INTO users (name, password, email, image)
          VALUES ('Jesús David Durán Carrillo', sda343, 'L19540487@chihuahua2.tecnm.mx', 'https://pbs.twimg.com/profile_images/1506792347840888834/dS-r50Je_400x400.jpg')
          ON CONFLICT (email) DO NOTHING;
      `,
      sql`
      INSERT INTO users (name, password, email, image)
      VALUES ('Alexis Sebastián Pereira Luján', miku, 'L19550833@chihuahua2.tecnm.mx', 'https://pbs.twimg.com/profile_images/1506792347840888834/dS-r50Je_400x400.jpg')
      ON CONFLICT (email) DO NOTHING;
  `,
  ])
  console.log(`Seeded ${users.length} users`)

  return {
    createTable,
    users,
  }
}
