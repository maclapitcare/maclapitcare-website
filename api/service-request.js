const { neon } = require('@neondatabase/serverless');
const { drizzle } = require('drizzle-orm/neon-http');
const { serviceRequests } = require('../shared/schema');
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
    const { name, phone, location, deviceModel, serviceType, preferredDate, issueDescription } = req.body;

    // Insert into database
    const result = await db.insert(serviceRequests).values({
      name,
      phone,
      location,
      deviceModel,
      serviceType,
      preferredDate: preferredDate ? new Date(preferredDate) : null,
      issueDescription
    }).returning();

    // Send email notification
    const emailHtml = `
      <h2>🔧 New Service Request</h2>
      <p><strong>Customer:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Location:</strong> ${location || 'Not specified'}</p>
      <p><strong>Device:</strong> ${deviceModel}</p>
      <p><strong>Service:</strong> ${serviceType}</p>
      <p><strong>Preferred Date:</strong> ${preferredDate || 'Flexible'}</p>
      <p><strong>Issue Description:</strong> ${issueDescription}</p>
    `;

    await transporter.sendMail({
      from: '"MacLap IT Care" <maclapitcare@gmail.com>',
      to: 'Maclapitcare@gmail.com',
      subject: `🔧 New Service Request from ${name} - ${serviceType}`,
      html: emailHtml
    });

    res.status(200).json({ success: true, id: result[0].id });
  } catch (error) {
    console.error('Service request error:', error);
    res.status(500).json({ error: 'Failed to submit service request' });
  }
};