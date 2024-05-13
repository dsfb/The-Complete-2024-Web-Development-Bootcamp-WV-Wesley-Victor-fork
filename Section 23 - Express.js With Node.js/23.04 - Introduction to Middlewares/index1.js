// Import the Express framework for creating web servers in Node.js
import express from "express";
// Import the `dirname` function from the `path` module, which returns the directory of a file
import { dirname } from "path";
// Import the `fileURLToPath` function from the `url` module, which converts a URL to a file path
import { fileURLToPath } from "url";
// Import the `body-parser` middleware, used to parse the body of HTTP requests
import bodyParser from "body-parser";

// Define the __dirname variable to the current directory of the file
const __dirname = dirname(fileURLToPath(import.meta.url));
// Initialize the Express application
const app = express();
// Define the port on which the server will listen for requests
const port = 3000;

// Use the bodyParser middleware to parse URL-encoded request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Set up a route to handle GET requests at the root of the server
app.get("/", (req, res) => {
  // Send the HTML file located in the /public/index.html directory as a response
  res.sendFile(__dirname + "/public/index.html");
});

// Set up a route to handle POST requests sent to /submit
app.post("/submit", (req, res) => {
  // Log the body of the received POST request to the console
  console.log(req.body);
});

// Start the server and make it listen on the specified port
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
