const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url"); // Pour analyser l'URL et ignorer les paramètres

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  let filePath = "." + parsedUrl.pathname; // Utilise uniquement le chemin sans les paramètres

  // Redirige vers index.html si aucune page n'est spécifiée
  if (filePath === "./") filePath = "./index.html";

  const extname = String(path.extname(filePath)).toLowerCase();
  const mimeTypes = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpg",
    ".gif": "image/gif",
  };
  const contentType = mimeTypes[extname] || "application/octet-stream";

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code == "ENOENT") {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("Page Not Found", "utf-8");
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${error.code}`);
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
