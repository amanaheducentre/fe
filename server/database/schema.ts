import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users_table", {
  id: text().primaryKey(),
  name: text().notNull(),
  avatar: text(),
  email: text().notNull().unique(),
  location: text(),
  phone: text(),
  about: text(),
  role: text().notNull().default("user"), // user | admin
});
