import {desc,eq} from 'drizzle-orm'
import { db } from '../drizzle/client'
import { chats } from '../drizzle/schema/chats'

interface GetChatHistoryParams {
  subscriberId: string,
  limit?: number
}

export async function getChatHistory({
  subscriberId,
  limit = 50,
}: GetChatHistoryParams) {
  const chatHistory = await db
    .select()
    .from(chats)
    .where(eq(chats.subscriberId, subscriberId))
    .orderBy(desc(chats.createdAt))
    .limit(limit)

  return { chatHistory }
}