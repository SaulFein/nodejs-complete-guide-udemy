const express = require('express');

const router = express.Router();


router.get('/', (req, res, next) => {
    res.send("<h1> Middle ware /")
});


module.exports = router;