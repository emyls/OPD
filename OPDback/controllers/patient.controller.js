const express=require('express');
const router=express.Router();
const patientModel=require('../models/patient.model');

router.get('/',patientModel.getPatients);
router.get('/:patientid',patientModel.getPatientByPid);
router.get('/visits/:visitid',patientModel.getPatientByVisitId);
router.post('/',patientModel.addPatients);
router.put('/:pid/allergies',patientModel.addAllergies);
router.put('/:pid/doctors/:docid',patientModel.addAssignedDoc);

module.exports=router;
