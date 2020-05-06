const sequelize=require('sequelize');
const connection=new sequelize('node_1011','root','',{host:'localhost',dialect:'mysql'});
module.exports=connection.define('buys',{
quantity:sequelize.STRING,
buyingPrice:sequelize.STRING,
distributorId:
{
    type:sequelize.STRING,
    references:
    {
        model:'distributor',
        key:'distributorId'
    }
},
productId:
{
    type:sequelize.STRING,
    references:
    {
        model:'product',
        key:'productId'
    }
}
},
{
    freezeTableName:true,
    timestamps:false
});