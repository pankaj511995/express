const path = require('path');

const express = require('express');

const router = express.Router();

const controller=require('../controller/products')

router.get('/add-product',controller.addProduct)

// /admin/add-product => POST
router.post('/add-product', controller.postAddProduct);

exports.routes = router;

