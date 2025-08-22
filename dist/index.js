// server/index.ts
import express from "express";
import { createServer } from "http";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
var __filename = fileURLToPath(import.meta.url);
var __dirname = dirname(__filename);
var app = express();
var server = createServer(app);
var clientDistPath = join(__dirname, "../dist/public");
app.use(express.static(clientDistPath));
var publicPath = join(__dirname, "../public");
app.use(express.static(publicPath));
app.get("*", (req, res) => {
  if (req.path.match(/\.(png|jpg|jpeg|gif|css|js|ico|svg)$/)) {
    res.status(404).end();
    return;
  }
  res.sendFile(join(clientDistPath, "index.html"));
});
var PORT = parseInt(process.env.PORT || "5000") || 5e3;
server.listen(PORT, "0.0.0.0", () => {
  console.log(`\u{1F680} Development server running on port ${PORT}`);
});
