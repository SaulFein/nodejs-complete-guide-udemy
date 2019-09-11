const http = require('http');

const express = require('express');

const app = express();

app.use('/add-product', (req, res, next) => {
    console.log("In the middleware ! 2")
    res.send("<h1>The Add Product Page</h1>");
});

// this order is important
app.use('/', (req, res, next) => {
    console.log("This Always Runs");
    res.send("<h1> Middle ware /")
});

app.listen(3000);
