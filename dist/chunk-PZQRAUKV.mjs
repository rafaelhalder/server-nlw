import {
  redis
} from "./chunk-PTGWJNFG.mjs";

// src/functions/get-subscriver-invites-count.ts
async function getSubscriberInvitesCount({
  subscriberId
}) {
  const count = await redis.zscore("referral:ranking", subscriberId);
  return { count: count ? Number.parseInt(count) : 0 };
}

export {
  getSubscriberInvitesCount
};
