var schema=require('../db.schema');
var usermodel=schema.model('user');
var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}

exports.getUser = function (req,res) {
    usermodel.find().exec().then((data)=>{
        res.send(data);
    }).catch((err)=>{
        console.log(err);
    });
};

exports.addUser=function(req,res){
    var pw=req.body.password;
    var encordedPw=Base64.encode(pw.toString());
    var newUser=new usermodel({
        userID:req.body.userID,
        usertype:req.body.usertype,//doctor or nurse
        username:req.body.username,
        password:encordedPw,
        comments:req.body.comments
    });
    newUser.save().then(()=>{
        res.status(201).json(newUser);
    }).catch((err)=>{
        console.log(err);
    });
};

exports.getUserById = function (req,res) {
    var uid=req.params.uid;
    usermodel.find({userID:uid}).exec().then((data)=>{
        res.send(data)
    }).catch((err)=>{
        console.log(err);
    });
};

exports.validateUser=function(req,res){
    var message;
    var pw=req.body.password;
    var userID=req.body.userID;
    var encordedPw=Base64.encode(pw.toString());
    usermodel.find({userID:userID}).exec().then((data)=>{
        if(data[0].password.toString()==encordedPw){
            message="validated";
            res.status(200).send(data);
        }else{
            message="Unauthorized user";
            res.status(404).send(message);
        }

    }).catch((err)=>{
        console.log(err);
        res.status(404);
    });
};

// // Encode the String
// var encodedString = Base64.encode(string);
// console.log(encodedString); // Outputs: "SGVsbG8gV29ybGQh"
//
// // Decode the String
// var decodedString = Base64.decode(encodedString);
// console.log(decodedString); // Outputs: "Hello World!"
