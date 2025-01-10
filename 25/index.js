var express = require('express');
var app = express();

//1. Application level middleware create korer jonno amader app.use() method call korte hobe. And er moddhe akta callback function amader diye dite hobe like below:
app.use(function(req,res,next){
    //2. As you can see amra aikhane 3ta parameter pacci: request,response and next. Aikhane "next" j route a request ashce shei route er corresponding controller ta k nirdesh korce. Tar mane next() call korer maddhome code er exicution oi controller tate chole jabe.
    console.log("I am application level middleware");
    next();
})

app.get('/',function(req,res){
    res.send("This is home page");
});
app.get('/contact',function(req,res){
    res.send("This is Contact page");
});
app.get('/about',function(req,res){
    res.send("This is about page");
});

app.listen(5000); 