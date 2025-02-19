import {
  redis
} from "./chunk-PTGWJNFG.mjs";

// src/functions/get-subscriber-invites-clicks.ts
async function getSubscriberInviteClicks({
  subscriberId
}) {
  const count = await redis.hget("referral:access-count", subscriberId);
  return { count: count ? Number.parseInt(count) : 0 };
}

export {
  getSubscriberInviteClicks
};
