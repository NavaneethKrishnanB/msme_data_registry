const express=require('express');
let router=express.Router();
const distributorController=require('../controller/distributor');

// router.get('/boughtProducts',distributorController.boughtProducts);
// router.get('/buyProduct',distributorController.getBuyProduct);
 router.post('/buyProduct',distributorController.postBuyProduct);
router.get('/listProduct',distributorController.getListProduct);
router.post('/listProduct',distributorController.postListProduct);
router.get('/backToProfile',distributorController.backToProfile);
module.exports=router;