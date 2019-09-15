const path = require('path');

const express = require('express');

const router = express.Router();

const adminData = require('./admin');

const rootDir = require('../util/path');

router.get('/', (req, res, next) => {
    const products =  adminData.products;
    res.render('shop', {
        pageTitle: 'Shop', 
        prods: products, 
        path: '/', 
        hasProducts: products.length > 0,
        activeShop: true,
        productsCSS: true
    });
});


module.exports = router;