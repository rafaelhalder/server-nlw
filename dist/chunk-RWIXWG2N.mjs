import { redis } from "./chunk-XMUR6WN6.mjs";

// src/functions/access-invite-link.ts
async function accessInviteLink({ subscriberId }) {
  try {
    await redis.hincrby("referral:access-count", subscriberId, 1);
  } catch (error) {
    console.log(error);
  }
}

export { accessInviteLink };
