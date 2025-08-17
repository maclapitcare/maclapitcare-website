import { 
  type User, 
  type InsertUser, 
  type ContactSubmission,
  type InsertContactSubmission,
  type ServiceRequest,
  type InsertServiceRequest,
  contactSubmissions,
  serviceRequests,
  users
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  createServiceRequest(request: InsertServiceRequest): Promise<ServiceRequest>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  getServiceRequests(): Promise<ServiceRequest[]>;
}

// Development storage for when database is not available
export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contactSubmissions: ContactSubmission[];
  private serviceRequests: ServiceRequest[];

  constructor() {
    this.users = new Map();
    this.contactSubmissions = [];
    this.serviceRequests = [];
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const contactSubmission: ContactSubmission = {
      id: randomUUID(),
      ...submission,
      email: submission.email ?? null,
      location: submission.location ?? null,
      device: submission.device ?? null,
      service: submission.service ?? null,
      message: submission.message ?? null,
      createdAt: new Date(),
    };
    this.contactSubmissions.push(contactSubmission);
    return contactSubmission;
  }

  async createServiceRequest(request: InsertServiceRequest): Promise<ServiceRequest> {
    const serviceRequest: ServiceRequest = {
      id: randomUUID(),
      ...request,
      preferredDate: request.preferredDate ?? null,
      issueDescription: request.issueDescription ?? null,
      createdAt: new Date(),
    };
    this.serviceRequests.push(serviceRequest);
    return serviceRequest;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return this.contactSubmissions;
  }

  async getServiceRequests(): Promise<ServiceRequest[]> {
    return this.serviceRequests;
  }
}

// Database storage for production
export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const [contactSubmission] = await db
      .insert(contactSubmissions)
      .values(submission)
      .returning();
    return contactSubmission;
  }

  async createServiceRequest(request: InsertServiceRequest): Promise<ServiceRequest> {
    const [serviceRequest] = await db
      .insert(serviceRequests)
      .values(request)
      .returning();
    return serviceRequest;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return await db.select().from(contactSubmissions);
  }

  async getServiceRequests(): Promise<ServiceRequest[]> {
    return await db.select().from(serviceRequests);
  }
}

// Use DatabaseStorage if DATABASE_URL is available, otherwise MemStorage
export const storage = process.env.DATABASE_URL 
  ? new DatabaseStorage() 
  : new MemStorage();
