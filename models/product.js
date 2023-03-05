const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
 
  save() {
    this.id=Math.random().toString()
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }
update(id){
  getProductsFromFile(product=>{
    const result=product.filter(e=>e.id!=id)
    this.id=id
    result.push(this)
    fs.writeFile(p,JSON.stringify(result),err=>{
      console.log(err)
    })
  })
}
  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
  static findByID(id,cb){
    getProductsFromFile(product=>{
      const pro=product.find(e=>e.id===id)
      cb(pro)
    })
  }
  static delete(id){
    getProductsFromFile(product=>{
      const result=product.filter(e=>e.id!=id)
      fs.writeFile(p,JSON.stringify(result),err=>{
        console.log(err)
      })
    })
  }
};
