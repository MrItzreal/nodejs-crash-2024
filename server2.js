import { createServer } from "http";
const PORT = process.env.PORT;

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
  { id: 3, name: "Jim Doe" },
];

/* Logger Middleware: These functions are usually placed in a 
separate file but will be used here for the sake of this course.
logger func have access to req & res objects since they sit
in the middle of incoming requests and responses.
 */
// logger func wrapped the if statement.
const logger = (req, res, next) => {
  console.log(`${req.method}  ${req.url}`);
  next();
};

// JSON Middleware
const jsonMiddleware = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
};

// Route handler for GET /api/users
const getUsersHandler = (req, res) => {
  res.write(JSON.stringify(users));
  res.end();
};

// Router handler for GET /api/users/:id
const getUsersByIdHandler = (req, res) => {
  const id = req.url.split("/")[3];
  const user = users.find((user) => user.id === parseInt(id));

  if (user) {
    res.write(JSON.stringify(user));
  } else {
    res.statusCode = 404;
    res.write(JSON.stringify({ Message: "User not found" }));
  }
  res.end();
};

// Not found handler
const notFoundHandler = (req, res) => {
  res.statusCode = 404;
  res.write(JSON.stringify({ Message: "Route not found" }));
  res.end();
};

const server = createServer((req, res) => {
  logger(req, res, () => {
    jsonMiddleware(req, res, () => {
      if (req.url === "/api/users" && req.method === "GET") {
        getUsersHandler(req, res);
      } else if (
        req.url.match(/\/api\/users\/([0-9]+)/) &&
        req.method === "GET"
      ) {
        getUsersByIdHandler(req, res);
      } else {
        notFoundHandler(req, res);
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
