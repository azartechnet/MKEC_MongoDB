var e1=require('express')
var app=e1()
app.get("/",function(req,res){
    res.send("Hello World");
}).listen(4000);
console.log("Server running..")