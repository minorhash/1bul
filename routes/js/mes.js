var fin=null;
fin="fin"
var i18=null

// if(ua=="ja"){
// i18=require("../son/ja.json")
// } else {
// i18=require("../son/en.json")
// }

i18=require("../son/en.json")
//var sub=i18.buy

var pre=null
var pid="pid"

pre=
i18.lin1
+i18.cau1
+i18.lin1+"<br>"
+"ano"+"様<br><br>"
+i18.cau2+"<br><br>"
+i18.cau3
+i18.cau4+"<br>"

+i18.cont+"<br>"
+i18.pid+":"+pid+"<br><br>"

var mes=pre+fin
console.log(mes)

var gMes={
    tx:mes,
    ite:function(ite){
for (var i=0;i< ite.length;i++){
fin+="タイトル:"+ite[i].title+",sku:tms-"+ite[i].id
        +",price:"+ite[i].unit_price.toLocaleString()+" yen"
        +",unit:"+ite[i].quantity+"<br>"
    return fin
}//for
}//ite fun

}

module.exports=gMes
