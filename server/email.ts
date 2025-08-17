import sgMail from '@sendgrid/mail';
import type { ContactSubmission, ServiceRequest, ServiceBooking } from '@shared/schema';

// Initialize SendGrid
const initializeSendGrid = () => {
  if (process.env.SENDGRID_API_KEY) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    return true;
  }
  return false;
};

const isEmailEnabled = initializeSendGrid();

export async function sendServiceRequestEmail(request: ServiceRequest): Promise<boolean> {
  if (!isEmailEnabled) {
    console.log('\n🔧 NEW SERVICE REQUEST RECEIVED!');
    console.log('=====================================');
    console.log(`👤 Customer: ${request.name}`);
    console.log(`📱 Phone: ${request.phone}`);
    console.log(`📍 Location: ${request.location}`);
    console.log(`💻 Device: ${request.device}`);
    console.log(`📝 Message: ${request.message}`);
    console.log(`⏰ Time: ${new Date(request.createdAt!).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`);
    console.log('=====================================');
    console.log('💡 Action Required: Call customer to schedule!');
    console.log('\n');
    return true; // Return true to show success message
  }

  try {
    const emailContent = {
      to: 'Maclapitcare@gmail.com', // Your business email
      from: 'noreply@maclapitcare.com', // This should be a verified sender in SendGrid
      subject: `🔧 New Service Request from ${request.name} - ${request.device}`,
      html: `
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
              <p style="margin: 0 0 8px 0;"><strong>📍 Location:</strong> ${request.location}</p>
              <p style="margin: 0;"><strong>💻 Device:</strong> ${request.device}</p>
            </div>
            
            <div style="background: white; padding: 15px; border-radius: 6px;">
              <h3 style="color: #1f2937; margin-top: 0;">Issue Description:</h3>
              <p style="background: #f3f4f6; padding: 12px; border-radius: 4px; margin: 0; line-height: 1.5;">
                ${request.message}
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
      `,
      text: `
New Service Request - Maclap IT Care

Customer: ${request.name}
Phone: ${request.phone}
Location: ${request.location}
Device: ${request.device}

Issue Description:
${request.message}

Submitted: ${new Date(request.createdAt!).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

Call the customer to schedule the repair service.
      `
    };

    await sgMail.send(emailContent);
    console.log('✅ Service request email sent successfully to Maclapitcare@gmail.com');
    return true;
  } catch (error) {
    console.error('❌ Failed to send service request email:', error);
    return false;
  }
}

export async function sendContactFormEmail(submission: ContactSubmission): Promise<boolean> {
  if (!isEmailEnabled) {
    console.log('\n📨 NEW CONTACT FORM SUBMISSION!');
    console.log('=====================================');
    console.log(`👤 Customer: ${submission.name}`);
    console.log(`📱 Phone: ${submission.phone}`);
    console.log(`📧 Email: ${submission.email}`);
    console.log(`📍 Location: ${submission.location}`);
    console.log(`🔧 Service: ${submission.service}`);
    if (submission.message) {
      console.log(`📝 Message: ${submission.message}`);
    }
    console.log(`⏰ Time: ${new Date(submission.createdAt!).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`);
    console.log('=====================================');
    console.log('💡 Action Required: Contact customer soon!');
    console.log('\n');
    return true; // Return true to show success message
  }

  try {
    const emailContent = {
      to: 'Maclapitcare@gmail.com', // Your business email
      from: 'noreply@maclapitcare.com', // This should be a verified sender in SendGrid
      subject: `📨 New Contact Form from ${submission.name} - ${submission.service}`,
      html: `
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
      `,
      text: `
New Contact Form - Maclap IT Care

Customer: ${submission.name}
Phone: ${submission.phone}
Email: ${submission.email}
Location: ${submission.location}
Service: ${submission.service}

${submission.message ? `Message:\n${submission.message}\n` : ''}

Submitted: ${new Date(submission.createdAt!).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

Contact the customer to provide service information.
      `
    };

    await sgMail.send(emailContent);
    console.log('✅ Contact form email sent successfully to Maclapitcare@gmail.com');
    return true;
  } catch (error) {
    console.error('❌ Failed to send contact form email:', error);
    return false;
  }
}

export async function sendServiceBookingEmail(booking: ServiceBooking): Promise<boolean> {
  if (!isEmailEnabled) {
    console.log('\n🔔 NEW SERVICE BOOKING RECEIVED!');
    console.log('=====================================');
    console.log(`👤 Customer: ${booking.name}`);
    console.log(`📱 Mobile: ${booking.mobile}`);
    console.log(`📍 Location: ${booking.location}`);
    console.log(`💻 Device: ${booking.device}`);
    console.log(`📝 Message: ${booking.message}`);
    console.log(`⏰ Time: ${new Date(booking.createdAt!).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`);
    console.log('=====================================');
    console.log('💡 Action Required: Call customer ASAP!');
    console.log('\n');
    return true; // Return true to show success message
  }

  try {
    const emailContent = {
      to: 'Maclapitcare@gmail.com', // Your business email
      from: 'noreply@maclapitcare.com', // This should be a verified sender in SendGrid
      subject: `📱 New Service Booking from ${booking.name} - ${booking.device}`,
      html: `
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
      `,
      text: `
New Service Booking - Maclap IT Care

Customer: ${booking.name}
Mobile: ${booking.mobile}
Location: ${booking.location}
Device: ${booking.device}

Issue Description:
${booking.message}

Submitted: ${new Date(booking.createdAt!).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

Quick Action Required: Call customer within 30 minutes.
      `
    };

    await sgMail.send(emailContent);
    console.log('✅ Service booking email sent successfully to Maclapitcare@gmail.com');
    return true;
  } catch (error) {
    console.error('❌ Failed to send service booking email:', error);
    return false;
  }
}