import { db } from "../drizzle/client";
import { chats } from "../drizzle/schema/chats";

interface SaveChatParams{
  subscriberId: string,
  message: string,
  response: string
}

export async function saveChat({
  subscriberId,message,response
}: SaveChatParams){
  const result = await db.insert(chats).values({subscriberId,message,response}).returning()
  return {chatId: result[0].id}
}