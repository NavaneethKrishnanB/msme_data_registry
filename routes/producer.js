const express=require('express');
let router=express.Router();
const producerController=require('../controller/producer');

// router.get('/viewProducts',producerController.viewProducts);
// router.get('/addProduct',producerController.getAddProduct);
 router.post('/addProduct',producerController.postAddProduct);
 router.get('/dummy',(req,res,next)=>{

 });

module.exports=router;