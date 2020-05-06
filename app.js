const express=require('express');
const path=require('path');
const sequelize=require('sequelize');
const bodyParser=require('body-parser');
let connection=new sequelize('node_1011','root','',{host:'localhost',dialect:'mysql'});

//routes
let producerRoute=require('./routes/producer');
let authRoute=require('./routes/auth');
let distributorRoute=require('./routes/distributor')
//models
let product=require('./models/product');
let distributor=require('./models/distributor');
let buys=require('./models/buys');
let company=require('./models/company');
let owner=require('./models/owner')
let transact=require('./models/transact');
//

const app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname, 'public')));
const port=8000;



company.belongsTo(owner,{foreignKey:'ownerId'});
owner.hasOne(company,{foreignKey:'ownerId'});
company.hasMany(product,{foreignKey:'companyId'});
product.belongsTo(company,{foreignKey:'companyId'});
distributor.belongsToMany(product,{through:'buys',foreignKey:'distributorId'});
product.belongsToMany(distributor,{through:'buys',foreignKey:'productId'});


connection.authenticate();
connection.sync({force:true})

//

// console.log(x);

//
app.use(producerRoute);
app.use(distributorRoute);
app.use(authRoute);
 
app.listen(3000);

