const sequelize=require('sequelize');
const connection=new sequelize('node_1011','root','',{host:'localhost',dialect:'mysql'});
module.exports=connection.define('product',{
manufactureCost:sequelize.STRING,
productName:sequelize.STRING,

productId:
{
 type:sequelize.STRING,
 primaryKey:true   
}
},
{
    freezeTableName:true,
    timestamps:false
});