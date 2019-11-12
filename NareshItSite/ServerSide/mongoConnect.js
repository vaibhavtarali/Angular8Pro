var mongoConnect = require("mongodb").MongoClient;

var url = "mongodb://127.0.0.1:2717";

MongoClient.connect(url,function(err,db)
{
 if(!err){
     console.log("connected to mongodb--");
 }else{
     console.log(err);
 }
})