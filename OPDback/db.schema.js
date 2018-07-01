const mongoose=require('mongoose');
const schema=mongoose.Schema;

const drugSchema=new schema({
    patientID:{type:String,required:true},
    visitID:{type:String,required:true},
    remarks:{type:String},
    drugname:{type:String,required:true},
    dosage:{type:String,required:true},
    frequency:{type:String,required:true},
    period:{type:String,required:true}
});

const labSchema=new schema({
    patientID:{type:String,required:true},
    visitID:{type:String,required:true},
    testname:{type:String,required:true},
    priority:{type:String,required:true},
    duedate:{type:String,required:true},
    comments:{type:String,required:true}
});

const patientSchema=new schema({
    patientID:{type:String,required:true},
    patientname:{type:String,required:true},
    gender:{type:String,required:true},
    civilstatus:{type:String,required:true},
    dob:{type:String,required:true},
    phone:{type:String,required:true},
    address:{type:String,required:true},
    bloodgroup:{type:String,required:true},
    bmi:{type:String,required:true},
    latestDoctor:{type:String},
    allergies:[{
        allergyName:String,
        remarks:String,
        state:String,
    }]
});
const treatmentSchema=new schema({
    patientID:{type:String,required:true},
    visitID:{type:String,required:true},
    illness:{type:String,required:true},
    symptoms:{type:String},
    treatment:{type:String,required:true},
    injection:{type:String},
    injectionDate:{type:String},
    injectionStatus:{type:String}
});
const userSchema=new schema({
    userID:{type:String,required:true},
    usertype:{type:String,required:true},
    username:{type:String,required:true},
    password:{type:String,required:true},
    comments:{type:String}
});
const visitSchema=new schema({
    patientID:{type:String,required:true},
    visitID:{type:String,required:true},
    complaint:{type:String,required:true},
    remarks:{type:String},
    date:{type:String,required:true},
    time:{type:String,required:true},
    doctorID:{type:String,required:true}
});

mongoose.model('drug',drugSchema,'druglist');
mongoose.model('lab',labSchema,'lablist');
mongoose.model('patient',patientSchema,'patientlist');
mongoose.model('treatment',treatmentSchema,'treatmentlist');
mongoose.model('user',userSchema,'userlist');
mongoose.model('visit',visitSchema,'visitlist');

mongoose.connect('mongodb://localhost:27017/dnd',(err)=>{
    if(err){
        console.log(err);
        process.exit(-1);
    }
});

module.exports=mongoose;
