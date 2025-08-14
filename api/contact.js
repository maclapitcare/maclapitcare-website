import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, phone, email, location, device, service, message } = req.body;

    // Validate required fields
    if (!name || !phone) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name and phone are required' 
      });
    }

    // Insert into database
    const result = await sql`
      INSERT INTO contact_submissions (name, phone, email, location, device, service, message)
      VALUES (${name}, ${phone}, ${email || ''}, ${location || ''}, ${device || ''}, ${service || ''}, ${message || ''})
      RETURNING id
    `;

    // Send success response
    res.status(200).json({ 
      success: true, 
      id: result[0].id,
      message: 'Contact form submitted successfully' 
    });

  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to submit contact form' 
    });
  }
}