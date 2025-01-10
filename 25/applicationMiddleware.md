## Ai tutorial a amra Application level middleware niye alochona korbo:
- ### Application level middleware hocce amn akta middleware j middleware puro application er moddhe joto request-response(akhane request-response bolte routes/end-point gula k bujano hocce jkhane amra request kori and response pai.) thakbe shobgular jonnoi exicute hobe.
- ### Toh practically Application level middleware niye kaj korer jonno ami akta express project create kore niyechi.

```javascript
//index.js
var express = require('express');
var app = express();

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
```
### As you can see amader application er moddhe request-response(routes) total 3ta. Akhon ami chacci amn akta middleware create korbo jta ai 3ta request-response er jonnoi exicute hobe. Tahole er jonno amader akat application level middleware create korte hobe like below:
```javascript
//index.js
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
```