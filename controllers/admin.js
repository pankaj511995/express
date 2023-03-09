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
  req.user.createProduct({title:title, imageUrl,imageUrl, description:description, price:price})
  .then(()=>res.redirect('/'))
  .catch(e=>console.log('error creating new product '))
}; 

exports.getProducts = (req, res, next) => {
req.user.getProducts().then(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};
exports.editProduct=(req,res)=>{
  req.user.getProducts({where:{id:req.params.productid}}).then(product=>{
    res.render('admin/edit-product', {
      product: product[0],
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
  Product.update({title:title, imageUrl,imageUrl, description:description, price:price},{where :{id:req.params.productid,userId:req.user.id}})
  .then(()=>res.redirect('/'))
  .catch(e=>console.log('error while updating'))
};
exports.postDeleteProduct=(req,res)=>{
  Product.destroy({where:{id:req.params.productid,userId:req.user.id}})
  res.redirect('/admin/products')
}