const express=require('express');
const routes=express.Router();
const drugroute=require('./controllers/drug.controller');
const labroute=require('./controllers/laborder.controller');
const patientroute=require('./controllers/patient.controller');
const treatmentroute=require('./controllers/treatment.controller');
const userroute=require('./controllers/user.controller');
const visitroute=require('./controllers/visit.controller');

 routes.use('/drugs',drugroute);
 routes.use('/labs',labroute);
 routes.use('/patients',patientroute);
 routes.use('/treatments',treatmentroute);
 routes.use('/users',userroute);
 routes.use('/visits',visitroute);

module.exports=routes;