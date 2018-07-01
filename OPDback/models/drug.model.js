var schema=require('../db.schema');
var drugmodel=schema.model('drug');

exports.getDrugs = function (req,res) {
    drugmodel.find().exec().then((data)=>{
        res.send(data);
    }).catch((err)=>{
        console.log(err);
    });
};

exports.getDrugByPid = function (req,res) {
    var patientid=req.params.patientid;
    drugmodel.find({patientID:patientid}).exec().then((data)=>{
        res.send(data)
    }).catch((err)=>{
        console.log(err);
    });
};

exports.getDrugByVisitId = function (req,res) {
    var visitid=req.params.visitid;
    drugmodel.find({visitID:visitid}).exec().then((data)=>{
        res.send(data);
    }).catch((err)=>{
        console.log(err);
    });
};

exports.addDrugs=function(req,res){
    var newDrug=new drugmodel({
        patientID:req.body.patientID,
        visitID:req.body.visitID,
        remarks:req.body.remarks,
        drugname:req.body.drugname,
        dosage:req.body.dosage,
        frequency:req.body.frequency,
        period:req.body.period
    });
    newDrug.save().then(()=>{
        res.status(201).json(newDrug);
    }).catch((err)=>{
        console.log(err);
    });
};
