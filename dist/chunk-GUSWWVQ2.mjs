import {
  subscriptions
} from "./chunk-S4VBCYJX.mjs";
import {
  env
} from "./chunk-SDWNZVBA.mjs";

// src/drizzle/client.ts
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
var client = postgres(env.POSTGRES_URL, {
  ssl: "require",
  max: 1
});
var db = drizzle(client, {
  schema: {
    subscriptions
  }
});

export {
  db
};
