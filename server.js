//http is a module included in Node.js
import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";
const PORT = process.env.PORT;

/* These paths are incompatible with ES Modules and will cause errors if used. But you can make your own using variables and methods:
__filename;
__dirname;
*/

// Get current path.
//file url is turned into a path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/*Console log both:
__filename gives both path & file name
__dirname only gives the path
 console.log(__filename, __dirname);
 */

/*path.join() Joins arguments together which results in a path.*/

const server = http.createServer(async (req, res) => {
  try {
    // Check if "GET" request
    if (req.method === "GET") {
      let filePath;
      if (req.url === "/") {
        filePath = path.join(__dirname, "public", "index.html");
      } else if (req.url === "/about") {
        filePath = path.join(__dirname, "public", "about.html");
      } else {
        throw new Error("Not Found");
      }

      const data = await fs.readFile(filePath);
      res.setHeader("Content-Type", "text/html");
      res.write(data);
      res.end();
    } else {
      throw new Error("Method not allowed");
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Server Error");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

//I used port 8000 for the server, but you can use any available port.
//server.listen(8000) was the initial server listen but the instructor improved it.

/* 
This was inside the server function:
 */
// res.setHeader("Content-Type", "text/html");
// res.statusCode = 404;
// res.end("<h1>Learning Node JS!</h1>");
/*We removed res.write("Learning Node JS") because with 
the .end method you can send a response*/
//the use of the "500" is for the status code.
