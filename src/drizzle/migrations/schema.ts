import { pgTable, serial, text, real, unique, uuid, timestamp } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const playingWithNeon = pgTable("playing_with_neon", {
	id: serial().primaryKey().notNull(),
	name: text().notNull(),
	value: real(),
});

export const subscriptions = pgTable("subscriptions", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	name: text().notNull(),
	email: text().notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	unique("subscriptions_email_unique").on(table.email),
]);
