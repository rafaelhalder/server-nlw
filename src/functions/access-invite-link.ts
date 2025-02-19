import { redis } from '../redis/client'
interface AccessInviteLinkParams {
  subscriberId: string
}

export async function accessInviteLink({
  subscriberId,
}: AccessInviteLinkParams) {
  try {
    await redis.hincrby('referral:access-count', subscriberId, 1)
  } catch (error) {
    console.log(error)
  }
}
