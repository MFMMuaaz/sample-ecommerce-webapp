const express = require('express');
const router = express.Router();

const controler = require('../controler/controler.js');

router.get('/', controler.home)

router.get('/category', controler.getCategoryList)

router.get('/:categoryId/products', controler.getProductsList)

router.get('/images/category/:categoryId', controler.getCategoryImages)

router.get('/images/product/:productId', controler.getProductImages)

module.exports = router