const { privateDecrypt } = require('crypto');
const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json'
);

module.exports = class Cart {
   static addProduct(id,price){
    fs.readFile(p,'utf8', (err, fileContent) => {
        let cart={product:[],totalprice:0}
        if (fileContent!='') {
          cart=JSON.parse(fileContent)
        }
        // console.log(cart,'file content is')
        const existingindex=cart.product.findIndex(e=>e.id===id)
        const existingproduct=cart.product[existingindex]
        let update;
        // console.log(existingindex,"KKKKKKKKKKK")
        if(existingproduct){
         
          update={...existingproduct}
          update.qty=update.qty+1;
          cart.product=[...cart.product]
          cart.product[existingindex]=update
        }else{
          update={id:id,qty:1}
          cart.product=[...cart.product,update]
        }
        cart.totalprice=cart.totalprice+ +price
        fs.writeFile(p,JSON.stringify(cart),err=>{
          console.log(err,'cart module error')
        })
   }) 
}
}
