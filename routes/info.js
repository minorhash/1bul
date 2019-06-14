var express = require('express');
var router = express.Router();
var par=null,sess=null,usr=null,email=null

var getPar=function(req, res, next) {
    par=req.params.id
    next()}

var getSes=function(req, res, next) {
    if(req.session){
sess=req.session
    if(sess){
usr=sess.usr
if(usr){
email=usr.email
}
sar=sess.sar
}else{console.log("=== no sess")}
}else{console.log("=== no req")}
next()}

var cb=function(req, res, next) {
    var obj={ title: 'info',usr:usr,par:par }
res.render('info',obj);
}
router.get('/info-:id',[getPar,getSes,cb] );

module.exports = router;
