const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    editing:false,
    activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl, description, price);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};
exports.editProduct=(req,res)=>{
  Product.findByID(req.params.productid,product=>{
    res.render('admin/edit-product', {
      product: product,
      pageTitle: 'Admin Products',
      path: '/admin/products',
      editing:req.query.edit
    });
  })
}
exports.posteditProduct= (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl, description, price);
  product.update(req.params.productid);
  res.redirect('/');
};
exports.postDeleteProduct=(req,res)=>{
  Product.delete(req.params.productid)
  res.redirect('/')
}