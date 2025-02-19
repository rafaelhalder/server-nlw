import {
  subscriptions
} from "./chunk-S4VBCYJX.mjs";
import {
  env
} from "./chunk-QEITFZL7.mjs";

// src/drizzle/client.ts
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
var pg = postgres(env.POSTGRES_URL);
var db = drizzle(pg, {
  schema: {
    subscriptions
  }
});

export {
  pg,
  db
};
