const distributor=require('../models/distributor');
const buys=require('../models/buys');
const product=require('../models/product');
const globals=require('../global');
exports.postBuyProduct=(req,res,next)=>
{
let productId=req.body.productId;
let quantity=req.body.quantity;
let buyingPrice=req.body.buyingPrice;
let did=globals.distributor.distributorId;
let dist=globals.distributor;
buys.create({buyingPrice:buyingPrice,quantity:quantity,distributorId:did,productId:productId})
.then(async ()=>{
return await buys.findAll({where:{distributorId:did}}).then((boughtItems)=>{
 return Promise.all(boughtItems.map(async (item)=>{
       await  product.findOne({where:{productId:item.productId}}).then((boughtProduct)=>{item.productName=boughtProduct.productName});
       return item;
    }));
})}).then((prods)=>{res.render('distributor',{products:prods,distributor:dist})})

}
exports.getListProduct=(req,res,next)=>{
    res.render('listProducts',{products:null,flag:"0"});
}
exports.postListProduct=(req,res,next)=>{
   var productName=req.body.productName;
   console.log(productName);
   product.findAll({where:{productName:productName}}).then((prods)=>{
    if(prods.length==0)
    {
        res.render('listProducts',{products:null,flag:"1"});
    }
    else
    res.render('listProducts',{products:prods,flag:"2"});
   });
}
exports.backToProfile=(req,res,next)=>{
     let did=globals.distributor.distributorId;
let dist=globals.distributor;

 buys.findAll({where:{distributorId:did}}).then( (boughtItems)=>{
    return Promise.all(boughtItems.map(async (item)=>{
          await  product.findOne({where:{productId:item.productId}}).then((boughtProduct)=>{item.productName=boughtProduct.productName});
          return item;
       }));
   }).then((prods)=>{res.render('distributor',{products:prods,distributor:dist})});
}