const Product = require('../models/product');
const Cart=require('../models/cart')
const User=require('../models/user')
exports.getProducts = (req, res, next) => {
  Product.findAll().then(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};
exports.detailsitem=(req,res,next)=>{
  Product.findByPk(req.params.productid).then(products=>{
    res.render('shop/product-detail', {
      product: products,
      pageTitle: products.title,
      path: '/'
    });
  })
}
exports.getIndex = (req, res, next) => {
  Product.findAll().then(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};

exports.getCart = (req, res, next) => {
  req.user.getCarts().then(cart=>{
    return cart.getProducts()
  }).then(products=>{
    res.render('shop/cart', {
        path: '/cart',
        prods: products,
        pageTitle: 'Your Cart'  
      })
   
  })
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};

exports.postCart=(req,res)=>{
  const id=req.body.productid;
  let qty=1;
  let fetchcart;
  req.user.getCarts().then(cart=>{
    fetchcart=cart
   return cart.getProducts({where :{id:id}})})
  .then(product=>{
   if(product.length>0){
    qty=product[0].cartItme.quantity+1
   }
   return Product.findByPk(id)
  }) 
  .then(e=>{
    fetchcart.addProduct(e,{through :{quantity:qty}})
  }).then(g=>res.redirect('/cart'))
  .catch(e=>console.log('error found while posting cart',e))
}

