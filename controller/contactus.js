

exports.getShopProduct=(req, res, next) => {
    res.render('contactus', {
      pageTitle: 'contact Us',
      path: '/contact/fillform',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  };


exports.postcontact=(req, res, next)=>{
console.log(req.body)
res.redirect('/')
}