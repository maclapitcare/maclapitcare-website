import nodemailer from 'nodemailer';
import type { ContactSubmission, ServiceRequest } from '@shared/schema';

// Email service configuration
interface EmailConfig {
  service: string;
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

// Multiple free email service configurations
const EMAIL_SERVICES = {
  // Brevo (formerly Sendinblue) - 9,000 emails/month free
  brevo: {
    service: 'brevo',
    host: 'smtp-relay.brevo.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.BREVO_SMTP_LOGIN || '',
      pass: process.env.BREVO_SMTP_KEY || ''
    }
  },
  // MailerSend - 3,000 emails/month free
  mailersend: {
    service: 'mailersend',
    host: 'smtp.mailersend.net',
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAILERSEND_SMTP_USER || '',
      pass: process.env.MAILERSEND_SMTP_PASS || ''
    }
  },
  // SMTP2GO - 1,000 emails/month free
  smtp2go: {
    service: 'smtp2go',
    host: 'mail.smtp2go.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP2GO_USER || '',
      pass: process.env.SMTP2GO_PASS || ''
    }
  },
  // Gmail with App Password (free but limited)
  gmail: {
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL_USER || '',
      pass: process.env.GMAIL_APP_PASSWORD || ''
    }
  },
  // Generic SMTP (for any provider)
  custom: {
    service: 'custom',
    host: process.env.SMTP_HOST || '',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER || '',
      pass: process.env.SMTP_PASS || ''
    }
  }
};

class EmailService {
  private transporter: any = null;
  private isEnabled = false;
  private activeService = '';

  constructor() {
    this.initializeEmailService();
  }

  private initializeEmailService() {
    // Try to initialize email services in order of preference
    const services = ['gmail', 'brevo', 'mailersend', 'smtp2go', 'custom'];
    
    for (const serviceName of services) {
      const config = EMAIL_SERVICES[serviceName as keyof typeof EMAIL_SERVICES];
      
      if (config.auth.user && config.auth.pass) {
        try {
          this.transporter = nodemailer.createTransport(config);
          this.isEnabled = true;
          this.activeService = serviceName;
          console.log(`✅ Email service initialized: ${serviceName}`);
          break;
        } catch (error) {
          console.warn(`⚠️ Failed to initialize ${serviceName}:`, error);
        }
      }
    }

    if (!this.isEnabled) {
      console.log('📧 No email service configured - using console logging');
      console.log('💡 To enable email notifications, configure one of:');
      console.log('   • Brevo: BREVO_SMTP_LOGIN, BREVO_SMTP_KEY');
      console.log('   • MailerSend: MAILERSEND_SMTP_USER, MAILERSEND_SMTP_PASS');
      console.log('   • SMTP2GO: SMTP2GO_USER, SMTP2GO_PASS');
      console.log('   • Gmail: GMAIL_USER, GMAIL_APP_PASSWORD');
      console.log('   • Custom: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS');
    }
  }

  private logToConsole(type: string, data: any) {
    const icons = {
      service: '🔧',
      contact: '📨',
      booking: '📱'
    };
    
    console.log(`\n${icons[type as keyof typeof icons]} NEW ${type.toUpperCase()} ${type === 'service' ? 'REQUEST' : type === 'contact' ? 'FORM' : 'BOOKING'} RECEIVED!`);
    console.log('=====================================');
    console.log(`👤 Customer: ${data.name}`);
    console.log(`📱 ${data.phone ? 'Phone' : 'Mobile'}: ${data.phone || data.mobile}`);
    
    if (data.email) {
      console.log(`📧 Email: ${data.email}`);
    }
    
    console.log(`📍 Location: ${data.location}`);
    
    if (data.service) {
      console.log(`🔧 Service: ${data.service}`);
    }
    
    if (data.device) {
      console.log(`💻 Device: ${data.device}`);
    }
    
    if (data.message) {
      console.log(`📝 Message: ${data.message}`);
    }
    
    console.log(`⏰ Time: ${new Date(data.createdAt!).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`);
    console.log('=====================================');
    console.log('💡 Action Required: Contact customer soon!');
    console.log('\n');
  }

  async sendServiceRequestEmail(request: ServiceRequest): Promise<boolean> {
    this.logToConsole('service', request);

    if (!this.isEnabled) {
      return true; // Return true to show success message
    }

    try {
      const mailOptions = {
        from: `"Maclap IT Care" <${EMAIL_SERVICES[this.activeService as keyof typeof EMAIL_SERVICES].auth.user}>`,
        to: 'Maclapitcare@gmail.com',
        subject: `🔧 New Service Request from ${request.name} - ${request.device}`,
        html: this.generateServiceRequestHTML(request),
        text: this.generateServiceRequestText(request)
      };

      await this.transporter.sendMail(mailOptions);
      console.log(`✅ Service request email sent via ${this.activeService}`);
      return true;
    } catch (error) {
      console.error(`❌ Failed to send service request email via ${this.activeService}:`, error);
      return false;
    }
  }

  async sendContactFormEmail(submission: ContactSubmission): Promise<boolean> {
    this.logToConsole('contact', submission);

    if (!this.isEnabled) {
      return true; // Return true to show success message
    }

    try {
      const mailOptions = {
        from: `"Maclap IT Care" <${EMAIL_SERVICES[this.activeService as keyof typeof EMAIL_SERVICES].auth.user}>`,
        to: 'Maclapitcare@gmail.com',
        subject: `📨 New Contact Form from ${submission.name} - ${submission.service}`,
        html: this.generateContactFormHTML(submission),
        text: this.generateContactFormText(submission)
      };

      console.log(`🔄 Attempting to send email via ${this.activeService}:`);
      console.log(`📧 From: ${mailOptions.from}`);
      console.log(`📧 To: ${mailOptions.to}`);
      console.log(`📧 Subject: ${mailOptions.subject}`);

      const result = await this.transporter.sendMail(mailOptions);
      console.log(`✅ Contact form email sent via ${this.activeService}:`, result);
      return true;
    } catch (error) {
      console.error(`❌ Failed to send contact form email via ${this.activeService}:`, error);
      console.error(`❌ Error details:`, JSON.stringify(error, null, 2));
      return false;
    }
  }



  private generateServiceRequestHTML(request: ServiceRequest): string {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <div style="background: linear-gradient(135deg, #3b82f6, #1e40af); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">🔧 New Service Request</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Maclap IT Care</p>
        </div>
        
        <div style="padding: 20px; background: #f9fafb;">
          <h2 style="color: #1f2937; margin-top: 0;">Customer Details</h2>
          
          <div style="background: white; padding: 15px; border-radius: 6px; margin-bottom: 15px;">
            <p style="margin: 0 0 8px 0;"><strong>👤 Name:</strong> ${request.name}</p>
            <p style="margin: 0 0 8px 0;"><strong>📱 Phone:</strong> <a href="tel:${request.phone}" style="color: #059669; text-decoration: none;">${request.phone}</a></p>
            ${request.location ? `<p style="margin: 0 0 8px 0;"><strong>📍 Location:</strong> ${request.location}</p>` : ''}
            <p style="margin: 0 0 8px 0;"><strong>💻 Device:</strong> ${request.deviceModel}</p>
            <p style="margin: 0;"><strong>🔧 Service:</strong> ${request.serviceType}</p>
          </div>
          
          <div style="background: white; padding: 15px; border-radius: 6px;">
            <h3 style="color: #1f2937; margin-top: 0;">Issue Description:</h3>
            <p style="background: #f3f4f6; padding: 12px; border-radius: 4px; margin: 0; line-height: 1.5;">
              ${request.issueDescription || 'No specific issue description provided'}
            </p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #dbeafe; border-radius: 6px; border-left: 4px solid #3b82f6;">
            <p style="margin: 0; color: #1e40af;"><strong>⏰ Submitted:</strong> ${new Date(request.createdAt!).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
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

  private generateContactFormHTML(submission: ContactSubmission): string {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <div style="background: linear-gradient(135deg, #059669, #047857); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">📨 New Contact Form</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Maclap IT Care</p>
        </div>
        
        <div style="padding: 20px; background: #f9fafb;">
          <h2 style="color: #1f2937; margin-top: 0;">Customer Details</h2>
          
          <div style="background: white; padding: 15px; border-radius: 6px; margin-bottom: 15px;">
            <p style="margin: 0 0 8px 0;"><strong>👤 Name:</strong> ${submission.name}</p>
            <p style="margin: 0 0 8px 0;"><strong>📱 Phone:</strong> <a href="tel:${submission.phone}" style="color: #059669; text-decoration: none;">${submission.phone}</a></p>
            <p style="margin: 0 0 8px 0;"><strong>📧 Email:</strong> <a href="mailto:${submission.email}" style="color: #059669; text-decoration: none;">${submission.email}</a></p>
            <p style="margin: 0 0 8px 0;"><strong>📍 Location:</strong> ${submission.location}</p>
            <p style="margin: 0;"><strong>🔧 Service:</strong> ${submission.service}</p>
          </div>
          
          ${submission.message ? `
          <div style="background: white; padding: 15px; border-radius: 6px;">
            <h3 style="color: #1f2937; margin-top: 0;">Message:</h3>
            <p style="background: #f3f4f6; padding: 12px; border-radius: 4px; margin: 0; line-height: 1.5;">
              ${submission.message}
            </p>
          </div>
          ` : ''}
          
          <div style="margin-top: 20px; padding: 15px; background: #dcfce7; border-radius: 6px; border-left: 4px solid #059669;">
            <p style="margin: 0; color: #047857;"><strong>⏰ Submitted:</strong> ${new Date(submission.createdAt!).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
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

  private generateServiceBookingHTML(booking: ServiceBooking): string {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <div style="background: linear-gradient(135deg, #8b5cf6, #7c3aed); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">📱 New Service Booking</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Maclap IT Care - Modal Form Submission</p>
        </div>
        
        <div style="padding: 20px; background: #f9fafb;">
          <h2 style="color: #1f2937; margin-top: 0;">Customer Details</h2>
          
          <div style="background: white; padding: 15px; border-radius: 6px; margin-bottom: 15px;">
            <p style="margin: 0 0 8px 0;"><strong>👤 Name:</strong> ${booking.name}</p>
            <p style="margin: 0 0 8px 0;"><strong>📱 Mobile:</strong> <a href="tel:${booking.mobile}" style="color: #8b5cf6; text-decoration: none;">${booking.mobile}</a></p>
            <p style="margin: 0 0 8px 0;"><strong>📍 Location:</strong> ${booking.location}</p>
            <p style="margin: 0;"><strong>💻 Device:</strong> ${booking.device}</p>
          </div>
          
          <div style="background: white; padding: 15px; border-radius: 6px;">
            <h3 style="color: #1f2937; margin-top: 0;">Issue Description:</h3>
            <p style="background: #f3f4f6; padding: 12px; border-radius: 4px; margin: 0; line-height: 1.5;">
              ${booking.message}
            </p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #ede9fe; border-radius: 6px; border-left: 4px solid #8b5cf6;">
            <p style="margin: 0; color: #7c3aed;"><strong>⏰ Submitted:</strong> ${new Date(booking.createdAt!).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
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

  private generateServiceRequestText(request: ServiceRequest): string {
    return `
New Service Request - Maclap IT Care

Customer: ${request.name}
Phone: ${request.phone}
${request.location ? `Location: ${request.location}` : ''}
Device: ${request.deviceModel}
Service Type: ${request.serviceType}

Issue Description:
${request.issueDescription || 'No specific issue description provided'}

Submitted: ${new Date(request.createdAt!).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

Call the customer to schedule the repair service.
    `;
  }

  private generateContactFormText(submission: ContactSubmission): string {
    return `
New Contact Form - Maclap IT Care

Customer: ${submission.name}
Phone: ${submission.phone}
Email: ${submission.email}
Location: ${submission.location}
Service: ${submission.service}

${submission.message ? `Message:\n${submission.message}\n` : ''}

Submitted: ${new Date(submission.createdAt!).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

Contact the customer to provide service information.
    `;
  }


}

// Export singleton instance
export const emailService = new EmailService();

// Export individual functions for backward compatibility
export const sendServiceRequestEmail = (request: ServiceRequest) => emailService.sendServiceRequestEmail(request);
export const sendContactFormEmail = (submission: ContactSubmission) => emailService.sendContactFormEmail(submission);