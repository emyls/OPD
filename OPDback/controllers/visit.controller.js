const express=require('express');
const router=express.Router();
const visitModel=require('../models/visit.model');

router.get('/',visitModel.getVisits);
router.get('/patients/:patientid',visitModel.getVisitsByPid);
router.get('/:visitid',visitModel.getVisitsById);
router.get('/:date/doctors/:docId',visitModel.getDoctorQueueByDocId);//get patients of doctors on a given date
router.post('/',visitModel.addVisits);
router.put('/:visitId/doctors/:docId',visitModel.redirectPatient);
router.put('/:visitId/remarks',visitModel.closeVisit);

module.exports=router;