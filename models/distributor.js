const sequelize=require('sequelize');
const connection=new sequelize('node_1011','root','',{host:'localhost',dialect:'mysql'});
module.exports=connection.define('distributor',{
distributorName:sequelize.STRING,
distributorId:{
    type:sequelize.STRING,
    primaryKey:true
},
zone:sequelize.STRING
},
{
    freezeTableName:true,
    timestamps:false
});