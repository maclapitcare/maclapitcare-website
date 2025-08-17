const { sql } = require("drizzle-orm");
const { pgTable, text, varchar, timestamp } = require("drizzle-orm/pg-core");

const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

const contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email"),
  location: text("location"),
  device: text("device"),
  service: text("service"),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

const serviceRequests = pgTable("service_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  location: text("location"),
  deviceModel: text("device_model").notNull(),
  serviceType: text("service_type").notNull(),
  preferredDate: text("preferred_date"),
  issueDescription: text("issue_description"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

module.exports = {
  users,
  contactSubmissions,
  serviceRequests
};