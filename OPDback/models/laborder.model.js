var schema=require('../db.schema');
var labmodel=schema.model('lab');

exports.getLabs = function (req,res) {
    labmodel.find().exec().then((data)=>{
        res.send(data);
    }).catch((err)=>{
        console.log(err);
    });
};

exports.getLabsByPid = function (req,res) {
    var patientid=req.params.patientid;
    labmodel.find({patientID:patientid}).exec().then((data)=>{
        res.send(data)
    }).catch((err)=>{
        console.log(err);
    });
};

exports.getLabByVisitId = function (req,res) {
    var visitid=req.params.visitid;
    labmodel.find({visitID:visitid}).exec().then((data)=>{
        res.send(data);
    }).catch((err)=>{
        console.log(err);
    });
};

exports.addLabs=function(req,res){
    var newLab=new labmodel({
        patientID:req.body.patientID,
        visitID:req.body.visitID,
        testname:req.body.testname,
        priority:req.body.priority,
        duedate:req.body.duedate,
        comments:req.body.comments
    });
    newLab.save().then(()=>{
        res.status(201).json(newLab);
    }).catch((err)=>{
        console.log(err);
    });
};
