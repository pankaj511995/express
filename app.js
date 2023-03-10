const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const User=require('./models/user')
const Product=require('./models/product')
const Cart=require('./models/cart')
const cartItem=require('./models/cartitem')
const errorController = require('./controllers/error');
// const sequelize=require('./models/product')
const sequelize=require('./util/database')
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views'); 

 
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use((req,res,next)=>{
    User.findByPk(1).then(user=>{
        req.user=user
        next()
    }).catch(err=>console.log('got error while gating user',err))
})

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(errorController.get404);

User.hasMany(Product)
Product.belongsTo(User,{onDelete:'CASCADE'})
User.hasMany(Cart)
Cart.belongsTo(User)
Cart.belongsToMany(Product,{through:cartItem})
Product.belongsToMany(Cart,{through:cartItem})


sequelize.sync({force:false}).then(()=>User.findByPk(1)).then((user)=>{
    if(!user){
        return User.create({name:'pankaj',email:'@gmail.com'})
    }
    return user
     
}).then((user)=>{
    app.listen(3000);
}).catch(e=>console.log('table not creaded',e))

