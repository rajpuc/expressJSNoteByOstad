var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send("This is home page");
});
app.get('/contact',function(req,res){
    res.send("This is Contact page");
});

//Er jonno o amader app.use() method k use korte hobe. Tobhe ai khtre amra jehetu '/about' route er jonno middleware create korbo tai er first argument hishebe amder '/about' route ta k diye dithe hobe then callback function k diye dite hobe:
app.use('/about',function(req,res,next){
    console.log("I am '/about's route middleware 😒")
    next();
})
app.get('/about',function(req,res){
    res.send("This is about page");
});

app.listen(5000); 