var express = require('express');
var app = express();
app.use(express.static("public"));


var value = {};
var len = 4;

app.get('/', function(req, res){
    value[0] = Math.floor((Math.random()*10)%6+4);
    value[1] = Math.floor((Math.random()*10)%6+4);
    value[2] = Math.floor((Math.random()*10)%6+4);
    value[3] = Math.floor((Math.random()*10)%6+4);
    res.render("home.ejs",{len: len, value: value});
})



app.listen(process.env.PORT||3000, process.env.IP, function(){
    console.log("server started");
})