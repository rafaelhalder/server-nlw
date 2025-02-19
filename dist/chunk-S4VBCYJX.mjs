// src/drizzle/schema/subscriptions.ts
import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";
var subscriptions = pgTable("subscriptions", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").notNull().defaultNow()
});

export {
  subscriptions
};
