const db=require('../util/database')
module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
 
  save() {
    return db.execute(`INSERT INTO product (title,imageUrl,price,description) VALUES(?,?,?,?)`,[this.title,this.imageUrl,this.price,this.description])
  }
update(id){
  
}
  static fetchAll() {
    return db.execute('SELECT * FROM product')
  }
  static findByID(id){
    return db.execute('SELECT * FROM product WHERE id=?' ,[id])
  }
  static delete(id){
   return db.execute(`DELETE FROM product  WHERE id=?`,[id])
  }
};
