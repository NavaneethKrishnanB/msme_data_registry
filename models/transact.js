const sequelize=require('sequelize');
const connection=new sequelize('node_1011','root','',{host:'localhost',dialect:'mysql'});
module.exports=connection.define('transact',{
    quantity:
    {
       type:sequelize.INTEGER
    }
},{
    
    freezeTableName:true,
    timestamps:false
});