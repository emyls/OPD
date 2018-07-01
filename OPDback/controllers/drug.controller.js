const express=require('express');
const router=express.Router();
const drugModel=require('../models/drug.model');

router.get('/',drugModel.getDrugs);
router.get('/:patientid',drugModel.getDrugByPid);
router.get('/visits/:visitid',drugModel.getDrugByVisitId);
router.post('/',drugModel.addDrugs);

module.exports=router;
