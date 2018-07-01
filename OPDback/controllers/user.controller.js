const express=require('express');
const router=express.Router();
const userModel=require('../models/user.model');

router.get('/',userModel.getUser);
router.post('/',userModel.addUser);
router.post('/validate',userModel.validateUser);
router.get('/:uid',userModel.getUserById);

module.exports=router;