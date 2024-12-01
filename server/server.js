const express = require("express"); // Import Express
const app = express(); // Create an instance of Express

const PORT = 3000; // Define the port number

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
