import env from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import router from "./routes";
import { verifyToken } from "./middleware/token";

env.config(); // This line loads environment variables from a .env file if it exists in the project directory

const app = express(); // This line creates a new instance of the Express application.
const port = process.env.PORT || 3000; // This line sets the port for the server to run on. It uses the environment variable PORT if it exists, otherwise defaults to 3000.

app.use(express.json()); // This line sets up the Express application to parse JSON request bodies.

const requestLogger = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  console.log(`[${request.method}] => url:: ${request.url}`);

  next();
};

app.use(requestLogger);

app.use(verifyToken);

app.use(router); // This line registers the router to handle all incoming requests. The router is responsible for defining the endpoints and their associated controller functions.

app.listen(port, () =>
  console.log(`Server listening on http://localhost:${port}`)
); // This line starts the server and listens for incoming requests on the specified port. When the server is ready to accept connections, it logs a message to the console.

// Overall, this code sets up an Express application with middleware functions that log incoming requests to the console, verify JWT tokens, and define endpoints for handling requests.
