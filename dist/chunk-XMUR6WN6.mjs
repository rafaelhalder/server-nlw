import {
  env
} from "./chunk-MHMENDYQ.mjs";

// src/redis/client.ts
import Redis from "ioredis";
var redis = new Redis(env.REDIS_URL, {
  tls: { rejectUnauthorized: false }
});

export {
  redis
};
