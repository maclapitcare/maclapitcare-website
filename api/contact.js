const { neon } = require('@neondatabase/serverless');
const { drizzle } = require('drizzle-orm/neon-http');
const { contactSubmissions } = require('../shared/schema');
const nodemailer = require('nodemailer');

const sql = neon(process.env.DATABASE_URL);
const db = drizzle(sql);

// Email configuration
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD
  }
});

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, phone, email, location, device, service, message } = req.body;

    // Insert into database
    const result = await db.insert(contactSubmissions).values({
      name,
      phone,
      email,
      location,
      device,
      service,
      message
    }).returning();

    // Send email notification
    const emailHtml = `
      <h2>📨 New Contact Form Submission</h2>
      <p><strong>Customer:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email || 'Not provided'}</p>
      <p><strong>Location:</strong> ${location}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;

    await transporter.sendMail({
      from: '"MacLap IT Care" <maclapitcare@gmail.com>',
      to: 'Maclapitcare@gmail.com',
      subject: `📨 New Contact Form from ${name} - ${service}`,
      html: emailHtml
    });

    res.status(200).json({ success: true, id: result[0].id });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ error: 'Failed to submit contact form' });
  }
};