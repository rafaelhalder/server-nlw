import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { env } from '../env'
import { subscriptions } from './schema/subscriptions'

// export const pg = postgres(env.POSTGRES_URL)
// export const db = drizzle(pg,{
//   schema: {
//     subscriptions
//   }
// })

const client = postgres(env.POSTGRES_URL, {
  ssl: 'require',
  max: 1,
})

export const db = drizzle(client, {
  schema: {
    subscriptions,
  },
})
