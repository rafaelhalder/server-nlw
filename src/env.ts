import { z } from 'zod'

const envSchema = z.object({
  PORT: z.string().transform(Number),
  API_URL: z.string().url(),
  WEB_URL: z.string().url(),
  POSTGRES_URL: z.string().url(),
  REDIS_URL: z.string().url(),
})

export const env = envSchema.parse(process.env)
