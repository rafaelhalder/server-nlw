import {
  redis
} from "./chunk-PTGWJNFG.mjs";

// src/functions/access-invite-link.ts
async function accessInviteLink({
  subscriberId
}) {
  await redis.hincrby("referral:access-count", subscriberId, 1);
}

export {
  accessInviteLink
};
