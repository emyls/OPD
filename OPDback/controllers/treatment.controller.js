const express=require('express');
const router=express.Router();
const treatmentModel=require('../models/treatment.model');

router.get('/',treatmentModel.getTreatments);
router.get('/:patientid',treatmentModel.getTreatmentsByPid);
router.get('/visits/:visitid',treatmentModel.getTreatmentsByVisitId);
router.post('/',treatmentModel.addTreatments);
router.put('/visits/:visitid/injections',treatmentModel.addInjection);

module.exports=router;
