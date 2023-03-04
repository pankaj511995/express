// const products = [];
const Product=require('../models/product')

// /admin/add-product => GET
 exports.addProduct=(req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  };

exports.postAddProduct=  (req, res, next) => {
    const product= new Product( req.body.title );
    product.save()
    res.redirect('/');
  }
