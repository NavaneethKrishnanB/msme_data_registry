const express=require('express');
let router=express.Router();
const authController=require('../controller/auth');
router.get('/distributorSignIn',(req,res,next)=>{
res.render('distributorsignup');
}
);
router.get('/producerSignIn',(req,res,next)=>{
res.render('producersignup');
})
router.post('/distributorSignIn',authController.postDistributorSignIn);
router.post('/producerSignIn',authController.postProducerSignIn);
router.post('/login/producer',authController.postProducerLogIn);
router.post('/login/distributor',authController.postDistributorLogIn)
router.get('/logout',authController.logOut);
router.get('/',(req,res,next)=>{
    res.render('frontPage');
});
module.exports=router;