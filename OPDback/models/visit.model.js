var schema=require('../db.schema');
var visitmodel=schema.model('visit');

exports.getVisits = function (req,res) {
    visitmodel.find().exec().then((data)=>{
        res.send(data);
    }).catch((err)=>{
        console.log(err);
    });
};

exports.getVisitsByPid = function (req,res) {
    var patientid=req.params.patientid;
    visitmodel.find({patientID:patientid}).exec().then((data)=>{
        res.send(data)
    }).catch((err)=>{
        console.log(err);
    });
};

exports.getDoctorQueueByDocId = function (req,res) {
    var docId=req.params.docId;
    var date=req.params.date;

    visitmodel.find({doctorID:docId,date:date}).exec().then((data)=>{
        res.send(data);
    }).catch((err)=>{
        console.log(err);
    });
};

exports.getVisitsById = function (req,res) {
    var visitid=req.params.visitid;
    visitmodel.find({visitID:visitid}).exec().then((data)=>{
        res.send(data);
    }).catch((err)=>{
        console.log(err);
    });
};

exports.addVisits=function(req,res){
    var d = new Date();
    var time= d.getTime();
    var newVisit=new visitmodel({
        patientID:req.body.patientID,
        visitID:"V"+time,
        complaint:req.body.complaint,
        remarks:req.body.remarks,
        date:d.toString().substring(4,15),
        time:d.toString().substring(16,21),
        doctorID:req.body.doctorID
    });
    newVisit.save().then(()=>{
        res.status(201).json(newVisit);
    }).catch((err)=>{
        console.log(err);
    });
};

exports.redirectPatient = function (req,res) {
    var visitid=req.params.visitId;

    var doctorid={
        doctorID:req.params.docId
    };
    visitmodel.update({visitID:visitid},doctorid).exec().then((data)=>{
        res.send(data);
    }).catch((err)=>{
        console.log(err);
    });

};

exports.closeVisit = function (req,res) {
    var visitid=req.params.visitId;

    var remarks={
        remarks:"Closed"
    };
    visitmodel.update({visitID:visitid},remarks).exec().then((data)=>{
        res.send(data);
    }).catch((err)=>{
        console.log(err);
    });

};
