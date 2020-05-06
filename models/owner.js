
const sequelize=require('sequelize');
const connection=new sequelize('node_1011','root','',{host:'localhost',dialect:'mysql'});
module.exports=connection.define('owner',{
ownerName:sequelize.STRING,
uid:
{
    type:sequelize.STRING,
    primaryKey:true
},
},
{
    freezeTableName:true,
    timestamps:false
});