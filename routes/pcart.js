var express = require('express');
var router = express.Router();
var db=require("cardb")
var par,sku,skumer,pri,uni,rsku,rset
var sess,ite,sob,sar=[],clr,skua,ind

var posSku=function(req, res, next) {
sku=req.body.sku
uni=req.body.uni
skumer=db.skuMer(sku)

sess=req.session
ite={sku:"",pri:"",uni:"",name:""}
if(sku){
    ite.name=skumer.name
    ite.sku=sku
    ite.uni=uni
    ite.pri=skumer.pri
    console.log(ite)
}else{console.log("no sku")}

if(sess.sar){
sar=sess.sar
sar.push(ite)
res.redirect("cart")

}else{
console.log("=== no sar")
sar=sess.sar=[]
}
next()}//pos sku

var chk=function(req, res, next) {
    console.log("==p cart")
    console.log(sku)
    console.log(sess)
    next()}

var cb=function(req, res ) {
var obj={ par:par,sku:sku,mer:skumer,sar:sar}
res.render('cart',obj)
}

router.post('/cart',[posSku,chk,cb] );
module.exports = router;
