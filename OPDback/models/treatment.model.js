var schema=require('../db.schema');
var treatmentmodel=schema.model('treatment');

exports.getTreatments = function (req,res) {
    treatmentmodel.find().exec().then((data)=>{
        res.send(data);
    }).catch((err)=>{
        console.log(err);
    });
};

exports.getTreatmentsByPid = function (req,res) {
    var patientid=req.params.patientid;
    treatmentmodel.find({patientID:patientid}).exec().then((data)=>{
        res.send(data)
    }).catch((err)=>{
        console.log(err);
    });
};

exports.getTreatmentsByVisitId = function (req,res) {
    var visitid=req.params.visitid;
    treatmentmodel.find({visitID:visitid}).exec().then((data)=>{
        res.send(data);
    }).catch((err)=>{
        console.log(err);
    });
};

exports.addTreatments=function(req,res){
    var newTreatment=new treatmentmodel({
        patientID:req.body.patientID,
        visitID:req.body.visitID,
        illness:req.body.illness,
        symptoms:req.body.symptoms,
        treatment:req.body.treatment,
        injection:"none",
        injectionDate:"none",
        injectionStatus:"none"
    });
    newTreatment.save().then(()=>{
        res.status(201).json(newTreatment);
    }).catch((err)=>{
        console.log(err);
    });
};

exports.addInjection=function(req,res){
    var visitid=req.params.visitid;
    var injection={
        injection:req.query.injection, //update only injection
        injectionDate:req.query.injectionDate,
        injectionStatus:req.query.injectionStatus
    };
    treatmentmodel.update({visitID:visitid},injection).exec().then((data)=>{
        res.send(data);
    }).catch((err)=>{
        console.log(err);
    });
};
