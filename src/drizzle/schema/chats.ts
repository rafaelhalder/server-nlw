import { pgTable,uuid,text,timestamp,foreignKey } from "drizzle-orm/pg-core";
import { subscriptions } from './subscriptions'

export const chats = pgTable('chats', {
  id: uuid('id').primaryKey().defaultRandom(),
  subscriberId: uuid('subscriber_id').notNull().references(() => subscriptions.id),
  message: text('message').notNull(),
  response: text('response').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow()
})