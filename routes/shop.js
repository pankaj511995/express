const path = require('path');

const express = require('express');

const shopcontroller = require('../controller/getinshop');


const router = express.Router();

router.get('/', shopcontroller.getShopProduct );

module.exports = router;
