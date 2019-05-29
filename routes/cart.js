var express = require('express');
var router = express.Router();
var db=require("cardb")
var par,sku,skumer,pri
var sess,ite,sob,sar=[]

var getPar=function(req, res, next) {
    par=req.params.id
    next()}

var getSku=function(req, res, next) {
sku=req.query.sku
skumer=db.skuMer(sku)

sess=req.session
if(sku){
    ite={sku:"",pri:"",uni:"",name:""}
    ite.name=skumer.name
    ite.sku=sku
    ite.pri=skumer.pri
if(ite){
    sar.push(ite)
    sess.sar=sar
}
}else{console.log("no sku")}
next()}

var posRed=function(req, res, next) {
res.redirect("cart")
next()}

var chk=function(req, res, next) {
    console.log(sku)
    console.log(sess.ite)
    next()}

var cb=function(req, res ) {
res.render('cart',
{ par:par,
    sku:sku,mer:skumer,
    ite:sess.ite,sar:sar
});
}
router.get('/cart',[getPar,getSku,
chk,cb,posRed] );
router.post('/cart',[getPar,getSku,
chk,cb] );

module.exports = router;
