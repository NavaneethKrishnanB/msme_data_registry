const sequelize=require('sequelize');
const connection=new sequelize('node_1011','root','',{host:'localhost',dialect:'mysql'});
module.exports=connection.define('company',{

companyId:
{
    type:sequelize.STRING,
    primaryKey:true
},

companyName:
{
    type:sequelize.STRING
},

},
{
    freezeTableName:true,
    timestamps:false
});