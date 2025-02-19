import {
  redis
} from "./chunk-XMUR6WN6.mjs";

// src/functions/get-subscriber-ranking-position.ts
async function getSubscriberRankingPosition({
  subscriberId
}) {
  try {
    if (!redis) {
      throw new Error("Redis connection is not open");
    }
    const rank = await redis.zrevrank("referral:ranking", subscriberId);
    if (rank === null) {
      return { position: null };
    }
    return { position: rank + 1 };
  } catch (error) {
    console.error("Error accessing Redis:", error);
    return { error: "Failed to fetch ranking position" };
  }
}

export {
  getSubscriberRankingPosition
};
