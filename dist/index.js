var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// shared/schema.ts
var schema_exports = {};
__export(schema_exports, {
  contactSubmissions: () => contactSubmissions,
  insertContactSubmissionSchema: () => insertContactSubmissionSchema,
  insertServiceRequestSchema: () => insertServiceRequestSchema,
  insertUserSchema: () => insertUserSchema,
  serviceRequests: () => serviceRequests,
  users: () => users
});
import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
var contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email"),
  location: text("location"),
  device: text("device"),
  service: text("service"),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull()
});
var serviceRequests = pgTable("service_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  location: text("location"),
  deviceModel: text("device_model").notNull(),
  serviceType: text("service_type").notNull(),
  preferredDate: text("preferred_date"),
  issueDescription: text("issue_description"),
  createdAt: timestamp("created_at").defaultNow().notNull()
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});
var insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true
});
var insertServiceRequestSchema = createInsertSchema(serviceRequests).omit({
  id: true,
  createdAt: true
});

// server/db.ts
import { Pool, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
neonConfig.webSocketConstructor = ws;
if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?"
  );
}
var pool = new Pool({ connectionString: process.env.DATABASE_URL });
var db = drizzle({ client: pool, schema: schema_exports });

// server/storage.ts
import { eq } from "drizzle-orm";
import { randomUUID } from "crypto";
var MemStorage = class {
  users;
  contactSubmissions;
  serviceRequests;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.contactSubmissions = [];
    this.serviceRequests = [];
  }
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = randomUUID();
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  async createContactSubmission(submission) {
    const contactSubmission = {
      id: randomUUID(),
      ...submission,
      email: submission.email ?? null,
      location: submission.location ?? null,
      device: submission.device ?? null,
      service: submission.service ?? null,
      message: submission.message ?? null,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.contactSubmissions.push(contactSubmission);
    return contactSubmission;
  }
  async createServiceRequest(request) {
    const serviceRequest = {
      id: randomUUID(),
      ...request,
      preferredDate: request.preferredDate ?? null,
      issueDescription: request.issueDescription ?? null,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.serviceRequests.push(serviceRequest);
    return serviceRequest;
  }
  async getContactSubmissions() {
    return this.contactSubmissions;
  }
  async getServiceRequests() {
    return this.serviceRequests;
  }
};
var DatabaseStorage = class {
  async getUser(id) {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || void 0;
  }
  async getUserByUsername(username) {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || void 0;
  }
  async createUser(insertUser) {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }
  async createContactSubmission(submission) {
    const [contactSubmission] = await db.insert(contactSubmissions).values(submission).returning();
    return contactSubmission;
  }
  async createServiceRequest(request) {
    const [serviceRequest] = await db.insert(serviceRequests).values(request).returning();
    return serviceRequest;
  }
  async getContactSubmissions() {
    return await db.select().from(contactSubmissions);
  }
  async getServiceRequests() {
    return await db.select().from(serviceRequests);
  }
};
var storage = process.env.DATABASE_URL ? new DatabaseStorage() : new MemStorage();

// server/routes.ts
import { z } from "zod";

// server/email-service.ts
import nodemailer from "nodemailer";
var EMAIL_SERVICES = {
  // Brevo (formerly Sendinblue) - 9,000 emails/month free
  brevo: {
    service: "brevo",
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.BREVO_SMTP_LOGIN || "",
      pass: process.env.BREVO_SMTP_KEY || ""
    }
  },
  // MailerSend - 3,000 emails/month free
  mailersend: {
    service: "mailersend",
    host: "smtp.mailersend.net",
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAILERSEND_SMTP_USER || "",
      pass: process.env.MAILERSEND_SMTP_PASS || ""
    }
  },
  // SMTP2GO - 1,000 emails/month free
  smtp2go: {
    service: "smtp2go",
    host: "mail.smtp2go.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP2GO_USER || "",
      pass: process.env.SMTP2GO_PASS || ""
    }
  },
  // Gmail with App Password (free but limited)
  gmail: {
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL_USER || "",
      pass: process.env.GMAIL_APP_PASSWORD || ""
    }
  },
  // Generic SMTP (for any provider)
  custom: {
    service: "custom",
    host: process.env.SMTP_HOST || "",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER || "",
      pass: process.env.SMTP_PASS || ""
    }
  }
};
var EmailService = class {
  transporter = null;
  isEnabled = false;
  activeService = "";
  constructor() {
    this.initializeEmailService();
  }
  initializeEmailService() {
    const services = ["gmail", "brevo", "mailersend", "smtp2go", "custom"];
    for (const serviceName of services) {
      const config = EMAIL_SERVICES[serviceName];
      if (config.auth.user && config.auth.pass) {
        try {
          this.transporter = nodemailer.createTransport(config);
          this.isEnabled = true;
          this.activeService = serviceName;
          console.log(`\u2705 Email service initialized: ${serviceName}`);
          break;
        } catch (error) {
          console.warn(`\u26A0\uFE0F Failed to initialize ${serviceName}:`, error);
        }
      }
    }
    if (!this.isEnabled) {
      console.log("\u{1F4E7} No email service configured - using console logging");
      console.log("\u{1F4A1} To enable email notifications, configure one of:");
      console.log("   \u2022 Brevo: BREVO_SMTP_LOGIN, BREVO_SMTP_KEY");
      console.log("   \u2022 MailerSend: MAILERSEND_SMTP_USER, MAILERSEND_SMTP_PASS");
      console.log("   \u2022 SMTP2GO: SMTP2GO_USER, SMTP2GO_PASS");
      console.log("   \u2022 Gmail: GMAIL_USER, GMAIL_APP_PASSWORD");
      console.log("   \u2022 Custom: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS");
    }
  }
  logToConsole(type, data) {
    const icons = {
      service: "\u{1F527}",
      contact: "\u{1F4E8}",
      booking: "\u{1F4F1}"
    };
    console.log(`
${icons[type]} NEW ${type.toUpperCase()} ${type === "service" ? "REQUEST" : type === "contact" ? "FORM" : "BOOKING"} RECEIVED!`);
    console.log("=====================================");
    console.log(`\u{1F464} Customer: ${data.name}`);
    console.log(`\u{1F4F1} ${data.phone ? "Phone" : "Mobile"}: ${data.phone || data.mobile}`);
    if (data.email) {
      console.log(`\u{1F4E7} Email: ${data.email}`);
    }
    console.log(`\u{1F4CD} Location: ${data.location}`);
    if (data.service) {
      console.log(`\u{1F527} Service: ${data.service}`);
    }
    if (data.device) {
      console.log(`\u{1F4BB} Device: ${data.device}`);
    }
    if (data.message) {
      console.log(`\u{1F4DD} Message: ${data.message}`);
    }
    console.log(`\u23F0 Time: ${new Date(data.createdAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}`);
    console.log("=====================================");
    console.log("\u{1F4A1} Action Required: Contact customer soon!");
    console.log("\n");
  }
  async sendServiceRequestEmail(request) {
    this.logToConsole("service", request);
    if (!this.isEnabled) {
      return true;
    }
    try {
      const mailOptions = {
        from: `"Maclap IT Care" <${EMAIL_SERVICES[this.activeService].auth.user}>`,
        to: "Maclapitcare@gmail.com",
        subject: `\u{1F527} New Service Request from ${request.name} - ${request.device}`,
        html: this.generateServiceRequestHTML(request),
        text: this.generateServiceRequestText(request)
      };
      await this.transporter.sendMail(mailOptions);
      console.log(`\u2705 Service request email sent via ${this.activeService}`);
      return true;
    } catch (error) {
      console.error(`\u274C Failed to send service request email via ${this.activeService}:`, error);
      return false;
    }
  }
  async sendContactFormEmail(submission) {
    this.logToConsole("contact", submission);
    if (!this.isEnabled) {
      return true;
    }
    try {
      const mailOptions = {
        from: `"Maclap IT Care" <${EMAIL_SERVICES[this.activeService].auth.user}>`,
        to: "Maclapitcare@gmail.com",
        subject: `\u{1F4E8} New Contact Form from ${submission.name} - ${submission.service}`,
        html: this.generateContactFormHTML(submission),
        text: this.generateContactFormText(submission)
      };
      console.log(`\u{1F504} Attempting to send email via ${this.activeService}:`);
      console.log(`\u{1F4E7} From: ${mailOptions.from}`);
      console.log(`\u{1F4E7} To: ${mailOptions.to}`);
      console.log(`\u{1F4E7} Subject: ${mailOptions.subject}`);
      const result = await this.transporter.sendMail(mailOptions);
      console.log(`\u2705 Contact form email sent via ${this.activeService}:`, result);
      return true;
    } catch (error) {
      console.error(`\u274C Failed to send contact form email via ${this.activeService}:`, error);
      console.error(`\u274C Error details:`, JSON.stringify(error, null, 2));
      return false;
    }
  }
  generateServiceRequestHTML(request) {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <div style="background: linear-gradient(135deg, #3b82f6, #1e40af); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">\u{1F527} New Service Request</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Maclap IT Care</p>
        </div>
        
        <div style="padding: 20px; background: #f9fafb;">
          <h2 style="color: #1f2937; margin-top: 0;">Customer Details</h2>
          
          <div style="background: white; padding: 15px; border-radius: 6px; margin-bottom: 15px;">
            <p style="margin: 0 0 8px 0;"><strong>\u{1F464} Name:</strong> ${request.name}</p>
            <p style="margin: 0 0 8px 0;"><strong>\u{1F4F1} Phone:</strong> <a href="tel:${request.phone}" style="color: #059669; text-decoration: none;">${request.phone}</a></p>
            ${request.location ? `<p style="margin: 0 0 8px 0;"><strong>\u{1F4CD} Location:</strong> ${request.location}</p>` : ""}
            <p style="margin: 0 0 8px 0;"><strong>\u{1F4BB} Device:</strong> ${request.deviceModel}</p>
            <p style="margin: 0;"><strong>\u{1F527} Service:</strong> ${request.serviceType}</p>
          </div>
          
          <div style="background: white; padding: 15px; border-radius: 6px;">
            <h3 style="color: #1f2937; margin-top: 0;">Issue Description:</h3>
            <p style="background: #f3f4f6; padding: 12px; border-radius: 4px; margin: 0; line-height: 1.5;">
              ${request.issueDescription || "No specific issue description provided"}
            </p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #dbeafe; border-radius: 6px; border-left: 4px solid #3b82f6;">
            <p style="margin: 0; color: #1e40af;"><strong>\u23F0 Submitted:</strong> ${new Date(request.createdAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
          </div>
        </div>
        
        <div style="background: #374151; color: white; padding: 15px; border-radius: 0 0 8px 8px; text-align: center;">
          <p style="margin: 0; font-size: 14px; opacity: 0.8;">
            Call the customer at <a href="tel:${request.phone}" style="color: #60a5fa;">${request.phone}</a> to schedule the repair service.
          </p>
        </div>
      </div>
    `;
  }
  generateContactFormHTML(submission) {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <div style="background: linear-gradient(135deg, #059669, #047857); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">\u{1F4E8} New Contact Form</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Maclap IT Care</p>
        </div>
        
        <div style="padding: 20px; background: #f9fafb;">
          <h2 style="color: #1f2937; margin-top: 0;">Customer Details</h2>
          
          <div style="background: white; padding: 15px; border-radius: 6px; margin-bottom: 15px;">
            <p style="margin: 0 0 8px 0;"><strong>\u{1F464} Name:</strong> ${submission.name}</p>
            <p style="margin: 0 0 8px 0;"><strong>\u{1F4F1} Phone:</strong> <a href="tel:${submission.phone}" style="color: #059669; text-decoration: none;">${submission.phone}</a></p>
            <p style="margin: 0 0 8px 0;"><strong>\u{1F4E7} Email:</strong> <a href="mailto:${submission.email}" style="color: #059669; text-decoration: none;">${submission.email}</a></p>
            <p style="margin: 0 0 8px 0;"><strong>\u{1F4CD} Location:</strong> ${submission.location}</p>
            <p style="margin: 0;"><strong>\u{1F527} Service:</strong> ${submission.service}</p>
          </div>
          
          ${submission.message ? `
          <div style="background: white; padding: 15px; border-radius: 6px;">
            <h3 style="color: #1f2937; margin-top: 0;">Message:</h3>
            <p style="background: #f3f4f6; padding: 12px; border-radius: 4px; margin: 0; line-height: 1.5;">
              ${submission.message}
            </p>
          </div>
          ` : ""}
          
          <div style="margin-top: 20px; padding: 15px; background: #dcfce7; border-radius: 6px; border-left: 4px solid #059669;">
            <p style="margin: 0; color: #047857;"><strong>\u23F0 Submitted:</strong> ${new Date(submission.createdAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
          </div>
        </div>
        
        <div style="background: #374151; color: white; padding: 15px; border-radius: 0 0 8px 8px; text-align: center;">
          <p style="margin: 0; font-size: 14px; opacity: 0.8;">
            Contact the customer at <a href="tel:${submission.phone}" style="color: #60a5fa;">${submission.phone}</a> or <a href="mailto:${submission.email}" style="color: #60a5fa;">${submission.email}</a>
          </p>
        </div>
      </div>
    `;
  }
  generateServiceBookingHTML(booking) {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <div style="background: linear-gradient(135deg, #8b5cf6, #7c3aed); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">\u{1F4F1} New Service Booking</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Maclap IT Care - Modal Form Submission</p>
        </div>
        
        <div style="padding: 20px; background: #f9fafb;">
          <h2 style="color: #1f2937; margin-top: 0;">Customer Details</h2>
          
          <div style="background: white; padding: 15px; border-radius: 6px; margin-bottom: 15px;">
            <p style="margin: 0 0 8px 0;"><strong>\u{1F464} Name:</strong> ${booking.name}</p>
            <p style="margin: 0 0 8px 0;"><strong>\u{1F4F1} Mobile:</strong> <a href="tel:${booking.mobile}" style="color: #8b5cf6; text-decoration: none;">${booking.mobile}</a></p>
            <p style="margin: 0 0 8px 0;"><strong>\u{1F4CD} Location:</strong> ${booking.location}</p>
            <p style="margin: 0;"><strong>\u{1F4BB} Device:</strong> ${booking.device}</p>
          </div>
          
          <div style="background: white; padding: 15px; border-radius: 6px;">
            <h3 style="color: #1f2937; margin-top: 0;">Issue Description:</h3>
            <p style="background: #f3f4f6; padding: 12px; border-radius: 4px; margin: 0; line-height: 1.5;">
              ${booking.message}
            </p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #ede9fe; border-radius: 6px; border-left: 4px solid #8b5cf6;">
            <p style="margin: 0; color: #7c3aed;"><strong>\u23F0 Submitted:</strong> ${new Date(booking.createdAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
          </div>
        </div>
        
        <div style="background: #374151; color: white; padding: 15px; border-radius: 0 0 8px 8px; text-align: center;">
          <p style="margin: 0; font-size: 14px; opacity: 0.8;">
            <strong>Quick Action Required:</strong> Call customer at <a href="tel:${booking.mobile}" style="color: #a78bfa;">${booking.mobile}</a> within 30 minutes.
          </p>
        </div>
      </div>
    `;
  }
  generateServiceRequestText(request) {
    return `
New Service Request - Maclap IT Care

Customer: ${request.name}
Phone: ${request.phone}
${request.location ? `Location: ${request.location}` : ""}
Device: ${request.deviceModel}
Service Type: ${request.serviceType}

Issue Description:
${request.issueDescription || "No specific issue description provided"}

Submitted: ${new Date(request.createdAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}

Call the customer to schedule the repair service.
    `;
  }
  generateContactFormText(submission) {
    return `
New Contact Form - Maclap IT Care

Customer: ${submission.name}
Phone: ${submission.phone}
Email: ${submission.email}
Location: ${submission.location}
Service: ${submission.service}

${submission.message ? `Message:
${submission.message}
` : ""}

Submitted: ${new Date(submission.createdAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}

Contact the customer to provide service information.
    `;
  }
};
var emailService = new EmailService();

// server/routes.ts
async function registerRoutes(app2) {
  app2.post("/api/contact", async (req, res, next) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      await emailService.sendContactFormEmail(submission);
      res.json({ success: true, id: submission.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Invalid form data",
          errors: error.errors
        });
      } else {
        next(error);
      }
    }
  });
  app2.post("/api/service-request", async (req, res, next) => {
    try {
      const validatedData = insertServiceRequestSchema.parse(req.body);
      const request = await storage.createServiceRequest(validatedData);
      await emailService.sendServiceRequestEmail(request);
      res.json({ success: true, id: request.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Invalid form data",
          errors: error.errors
        });
      } else {
        next(error);
      }
    }
  });
  app2.get("/api/contact-submissions", async (req, res, next) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      next(error);
    }
  });
  app2.get("/api/service-requests", async (req, res, next) => {
    try {
      const requests = await storage.getServiceRequests();
      res.json(requests);
    } catch (error) {
      next(error);
    }
  });
  app2.post("/api/service-booking", async (req, res, next) => {
    try {
      const validatedData = insertServiceRequestSchema.parse(req.body);
      const request = await storage.createServiceRequest(validatedData);
      await emailService.sendServiceRequestEmail(request);
      res.json({ success: true, id: request.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Invalid booking data",
          errors: error.errors
        });
      } else {
        next(error);
      }
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  app.use(express2.static("public"));
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
