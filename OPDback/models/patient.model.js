var schema=require('../db.schema');
var patientmodel=schema.model('patient');

exports.getPatients = function (req,res) {
    patientmodel.find().exec().then((data)=>{
        res.send(data);
    }).catch((err)=>{
        console.log(err);
    });
};

exports.getPatientByPid = function (req,res) {
    var patientid=req.params.patientid;
    patientmodel.find({patientID:patientid}).exec().then((data)=>{
        res.send(data);
    }).catch((err)=>{
        console.log(err);
    });
};

exports.getPatientByVisitId = function (req,res) {
    var visitid=req.params.visitid;
    patientmodel.find({visitID:visitid}).exec().then((data)=>{
        res.send(data);
    }).catch((err)=>{
        console.log(err);
    });
};

exports.addPatients=function(req,res){
    var d = new Date();
    var t= d.getTime();
    var newPatient=new patientmodel({
        patientID:"P"+t,
        patientname:req.body.patientname,
        gender:req.body.gender,
        civilstatus:req.body.civilstatus,
        dob:req.body.dob,
        phone:req.body.phone,
        address:req.body.address,
        bloodgroup:req.body.bloodgroup,
        bmi:req.body.bmi,
        allergies:[
            {
                allergyName:"none",
                remarks:"none",
                state:"none"
            }
        ]//update this when adding allergies
    });
    newPatient.save().then(()=>{
        res.status(201).json(newPatient);
    }).catch((err)=>{
        console.log(err);
    });
};

exports.addAllergies = function (req,res) {
    var patientID=req.params.pid;
    var allergies={
        allergies:req.body.allergies //update only allergies
    };
    patientmodel.update({patientID:patientID},allergies).exec().then((data)=>{
        res.status(201).json(data);
    }).catch((err)=>{
        console.log(err);
    });
};

exports.addAssignedDoc = function (req,res) {
    var patientID=req.params.pid;
    var latestDoctor={
        latestDoctor:req.params.docid //update patient latest doctor
    };
    patientmodel.update({patientID:patientID},latestDoctor).exec().then((data)=>{
        res.status(201).json(data);
    }).catch((err)=>{
        console.log(err);
    });
};
