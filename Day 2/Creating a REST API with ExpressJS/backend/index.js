// nodemon (npm install -D nodemon)
// express (npm install express)
// body-parser (npm install body-parser)
// cors (npm install cors)

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 3001; // localhost:3001/addProduct

const app = express();

app.use(bodyParser.json());
app.use(cors());

var allProducts = [];

// HTTP Methods - GET, POST, PUT, PATCH, DELETE

// CRUD API
// Create (POST)
app.post("/addProduct", (req, res) => {
    let data = req.body;
    allProducts.push(data);
    res.json({ "message": "Product " + data.product_name + " stored succesfully" });
    console.log(allProducts);
});

// Read (GET)
app.get('/', (req, res) => {
    res.json({ products: allProducts });
});

// Delete (DELETE)
app.delete('/deleteProduct', (req, res) => {
    let data = allProducts.shift();
    res.json({ "message": "Product " + data.product_name + " has been deleted" });
});

app.listen(port, () => {
    console.log("App is running..");
});

// npm start