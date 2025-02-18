import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { env } from '../env'
import { accessInviteLink } from '../functions/access-invite-link'
import { subscribeToEvent } from '../functions/subscribe-to-event'
import { redis } from '../redis/client'
export const accessInviteLinkRoute: FastifyPluginAsyncZod = async app => {
  app.get(
    '/invites/:subscriberId',
    {
      schema: {
        summary: 'Access invite link and redirects users',
        tags: ['referal'],
        params: z.object({
          subscriberId: z.string(),
        }),
        response: {
          201: z.object({ subscriberId: z.string() }),
        },
      },
    },
    async (request, reply) => {
      const { subscriberId } = request.params

      await accessInviteLink({ subscriberId })

      // console.log(await redis.hgetall('referral:access-count'))

      const redirectUrl = new URL(env.WEB_URL)
      // 301: redirect permanent
      // 302: redirect temorario
      redirectUrl.searchParams.set('referrer', subscriberId)

      return reply.redirect(redirectUrl.toString(), 302)
    }
  )
}
