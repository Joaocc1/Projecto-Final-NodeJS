import env from "dotenv";
import express from "express";

env.config(); // This line loads environment variables from a .env file if it exists in the project directory

const app = express(); // This line creates a new instance of the Express application.
const port = process.env.PORT || 3000; // This line sets the port for the server to run on. It uses the environment variable PORT if it exists, otherwise defaults to 3000.

app.use(express.json()); // This line sets up the Express application to parse JSON request bodies.

app.listen(port, () =>
  console.log(`Server listening on http://localhost:${port}`)
); // This line starts the server and listens for incoming requests on the specified port. When the server is ready to accept connections, it logs a message to the console.
