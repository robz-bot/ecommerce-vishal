// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of the Express application
const app = express();

// Set up the body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define the API endpoint to retrieve the list of products
app.get('/products', (req, res) => {
  // Define an array of product objects
  const products = [
    { id: 1, name: 'Product 1', price: 9.99 },
    { id: 2, name: 'Product 2', price: 14.99 },
    { id: 3, name: 'Product 3', price: 19.99 },
    // Add more products here as needed
  ];

  // Return the list of products as a JSON response
  res.json(products);
});

// Start the server
const port = 3000; // Change this as needed
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
