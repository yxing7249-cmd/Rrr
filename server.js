
const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    return res.end();
  }

  if (req.url === "/") {
    res.writeHead(200);
    return res.end(JSON.stringify({
      name: "NEXUS CLOUD",
      version: "1.0.0",
      status: "online",
      message: "Welcome to NEXUS Cloud Server"
    }));
  }

  if (req.url === "/health") {
    res.writeHead(200);
    return res.end(JSON.stringify({
      status: "healthy"
    }));
  }

  if (req.url === "/api/status") {
    res.writeHead(200);
    return res.end(JSON.stringify({
      server: "NEXUS",
      status: "online",
      platform: "Render",
      version: "1.0.0"
    }));
  }

  res.writeHead(404);
  res.end(JSON.stringify({
    error: "Not Found"
  }));
});

server.listen(PORT, "0.0.0.0", () => {
  console.log("NEXUS CLOUD started on port " + PORT);
});
