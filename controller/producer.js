const producer=require('../models/company');
const product=require('../models/product');
const globals=require('../global');
exports.postAddProduct=(req,res,next)=>
{
let productName=req.body.productName;
let productId=req.body.productId;
let manufactureCost=req.body.manufactureCost;
let cid=globals.cid;
console.log(globals.producer);
product.create({productName:productName,productId:productId,manufactureCost:manufactureCost,companyId:cid})
.then(async ()=>{
return product.findAll({where:{
    companyId:cid
}})}).then((prods)=>{
res.render('producer',{owner:globals.producer,company:globals.company,products:prods})});
}