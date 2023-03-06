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
  Product.create({title:title, imageUrl,imageUrl, description:description, price:price})
  .then(()=>res.redirect('/'))
  .catch(e=>console.log('error creating new product '))
};

exports.getProducts = (req, res, next) => {
  Product.findAll().then(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};
exports.editProduct=(req,res)=>{
  Product.findByPk(req.params.productid).then(product=>{
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
  Product.update({title:title, imageUrl,imageUrl, description:description, price:price},{where :{id:req.params.productid}})
  .then(()=>res.redirect('/'))
  .catch(e=>console.log('error while updating'))
};
exports.postDeleteProduct=(req,res)=>{
  Product.destroy({where:{id:req.params.productid}})
  res.redirect('/')
}