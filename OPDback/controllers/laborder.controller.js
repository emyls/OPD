const express=require('express');
const router=express.Router();
const labModel=require('../models/laborder.model');

router.get('/',labModel.getLabs);
router.get('/:patientid',labModel.getLabsByPid);
router.get('/visits/:visitid',labModel.getLabByVisitId);
router.post('/',labModel.addLabs);

module.exports=router;
