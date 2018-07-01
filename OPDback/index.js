const express=require('express');
const bodyparser=require('body-parser');
const cors=require('cors');
const routes=require('./routes');
const app=express();

//app.use(cors());
app.use(function (req, res, next) {
   res.header('Access-Control-Allow-Origin', "*");
   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
   res.header('Access-Control-Allow-Headers', 'Content-Type');
   next();
});

app.use(bodyparser.json());
app.use('/',routes);

app.listen(7070,err=>{
    if(err){
        console.log(err);
        process.exit(-1);
    }
    console.log('connected to localhost at post 7070');
});
