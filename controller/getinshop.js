// const adminData = require('./products');
const Product=require('../models/product')
exports.getShopProduct=(req, res, next) => {
    // const products = adminData.products;
    const pro=new Product()
    pro.fetchAll(products=>{
        res.render('shop', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
          });
    })
    
  }