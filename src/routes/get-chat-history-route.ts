// src/routes/get-chat-history-route.ts
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { getChatHistory } from '../functions/get-chat-history'

export const getChatHistoryRoute: FastifyPluginAsyncZod = async app => {
  app.get(
    '/subscribers/:subscriberId/chats',
    {
      schema: {
        summary: 'Get chat history for a subscriber',
        operationId: 'getChatHistory',
        tags: ['ai'],
        params: z.object({
          subscriberId: z.string().uuid(),
        }),
        querystring: z.object({
          limit: z.coerce.number().default(50).optional(),
        }),
        response: {
          200: z.object({
            chatHistory: z.array(
              z.object({
                id: z.string().uuid(),
                subscriberId: z.string().uuid(),
                message: z.string(),
                response: z.string(),
                createdAt: z.string(),
              })
            ),
          }),
        },
      },
    },
    async request => {
      const { subscriberId } = request.params
      const { limit } = request.query

      const { chatHistory } = await getChatHistory({
        subscriberId,
        limit,
      })

      return { chatHistory }
    }
  )
}