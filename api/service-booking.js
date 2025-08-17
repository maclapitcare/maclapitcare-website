const { neon } = require('@neondatabase/serverless');

module.exports = async function handler(req, res) {
  const sql = neon(process.env.DATABASE_URL);
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
    const { name, phone, location, deviceModel, serviceType, issueDescription } = req.body;

    // Validate required fields
    if (!name || !phone || !deviceModel || !serviceType) {
      return res.status(400).json({ 
        success: false, 
        message: 'Missing required fields' 
      });
    }

    // Insert into database
    const result = await sql`
      INSERT INTO service_requests (name, phone, location, device_model, service_type, issue_description)
      VALUES (${name}, ${phone}, ${location || ''}, ${deviceModel}, ${serviceType}, ${issueDescription || ''})
      RETURNING id
    `;

    // Send success response
    res.status(200).json({ 
      success: true, 
      id: result[0].id,
      message: 'Booking request submitted successfully' 
    });

  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to submit booking request' 
    });
  }
}