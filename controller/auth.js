const producer=require('../models/owner');
const distributor=require('../models/distributor');
const company=require('../models/company');
const product=require('../models/product');
const buys=require('../models/buys');
const globals=require('../global');

exports.postDistributorSignIn=(req,res,next)=>{
let distributorName=req.body.distributorName;
let distributorId=req.body.distributorId;
let zone=req.body.zone;
distributor.create({distributorName:distributorName,distributorId:distributorId,zone:zone})
.then(()=>console.log("inserted"));
res.render('frontpage');
};
exports.postProducerSignIn=(req,res,next)=>{
let producerName=req.body.producerName;
let uid=req.body.uid;
let companyId=req.body.companyId;
let companyName=req.body.companyName;
producer.create({ownerName:producerName,uid:uid});
company.create({companyId:companyId,companyName:companyName,ownerId:uid});
res.render('frontpage');
};
exports.postProducerLogIn=(req,res,next)=>{
let uid=req.body.uid;
let prod,comp,prodct;

producer.findOne({
    where:{
        uid:uid
    }
}).then((curOwner)=>{
    prod=curOwner;
    globals.producer=curOwner;
   return company.findOne({where:{
        ownerId:uid
    }});
}).then((sme)=>
{    
    globals.company=sme;
    globals.cid=sme.companyId;
    comp=sme;
    return product.findAll({
        where:{
            companyId:sme.companyId
        }
    })
}).then((prods)=>
{
    prodct=prods;
    res.render('producer',{owner:prod,company:comp,products:prodct});
})
.catch(err=>{
    console.log(err);
})

}
exports.postDistributorLogIn=(req,res,next)=>{
let did=req.body.distributorId;
let dist;
globals.did=did;

distributor.findOne({where:{distributorId:did}}).then((distri)=>{dist=distri,globals.distributor=dist});
 buys.findAll({where:{distributorId:did}}).then((boughtItems)=>{
 return Promise.all(boughtItems.map(async (item)=>{
       await  product.findOne({where:{productId:item.productId}}).then((boughtProduct)=>{item.productName=boughtProduct.productName});
       return item;
    }));
}).then((prods)=>{res.render('distributor',{products:prods,distributor:dist})})
}
exports.logOut=(req,res,next)=>
{
    globals.did=null;
    globals.distributor=null;
    globals.producer=null;
    res.render('frontpage');
}