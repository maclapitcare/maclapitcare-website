import express from 'express';
import { createServer } from 'http';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const server = createServer(app);

// Serve static files from client build
const clientDistPath = join(__dirname, '../dist/public');
app.use(express.static(clientDistPath));

// Serve static files from root public folder (for your service images)
const publicPath = join(__dirname, '../public');
app.use(express.static(publicPath));

// SPA routing - serve index.html for all routes that don't match static files
app.get('*', (req, res) => {
  // Don't serve index.html for image/asset requests
  if (req.path.match(/\.(png|jpg|jpeg|gif|css|js|ico|svg)$/)) {
    res.status(404).end();
    return;
  }
  res.sendFile(join(clientDistPath, 'index.html'));
});

const PORT = parseInt(process.env.PORT || '5000') || 5000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Development server running on port ${PORT}`);
});