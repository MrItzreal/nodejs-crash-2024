//http is a module included in Node.js
import http from "http";
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Learning Node JS</h1>");
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
