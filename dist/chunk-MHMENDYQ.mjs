// src/env.ts
import { z } from "zod";
var envSchema = z.object({
  PORT: z.string().transform(Number),
  WEB_URL: z.string().url(),
  POSTGRES_URL: z.string().url(),
  REDIS_URL: z.string().url()
});
var env = envSchema.parse(process.env);

export {
  env
};
