## Ei tutorial a amra `Response Cookies set` kora niye kaj korbo.
- ### Cookies are small pieces of data stored on the client-side (in the user's browser). They are used for various purposes, such as maintaining user sessions, storing preferences, or tracking user activities.
- ### Respone a Cookies set korer jonno ami agher tutorial er code takei use korbo:
```javascript
//index.js 
const express = require('express');
const app = express();

app.get('/one',function(req,res){
    res.end('This is simple string response');
})

app.post('/two',function(req,res){
    res.end('This is simple string response');
})


app.get('/three',function(req,res){
    res.status(401).end('unauthorized');  
})

app.get('/four',function(req,res){
   
    let MyJSONArray=[
        {
            name: "Rajesh Pal",
            city: "Rangamati",
            occupation: "Engr",
        },
        {
            name: "Rabbil Hasan",
            city: "Dhaka",
            occupation: "Engr",
        },
        {
            name: "Rifat",
            city: "Dhaka",
            occupation: "Engr",
        },
        {
            name: "Rakib",
            city: "Rangpur",
            occupation: "Student",
        }
    ]

    res.json(MyJSONArray); 
})


app.get('/five', function(req,res){
    res.download("./uploads/1.png");  
})


app.get('/bangladesh', function(req,res){
    res.redirect("http://localhost:8000/india");
})

app.get('/india', function(req,res){
    res.send("This is India");
})

app.get('/six', function(req,res){ 
    res.append("name","Rajesh Pal");
    res.append("city","Dhaka");
    res.append("age","30 Years Old");
    res.status(201).end("Hello world");
})

//1. Response a Cookies set korer jonno akhane notun 1ta route ami create kore nicci.
app.get('/seven', function(req,res){ 
    //2. cokkies set korer jonno res.cookie() k use korte hobe. akhon res.cookie() te amader first parameter hishebe key diye dite hobe and 2nd parameter a amader value diye dite hobe.
    res.cookie("Name","Rajesh");
    //3. Erokom onk gula cookie amra chaile set kore dite pari
    res.cookie("City","Dhaka");
    res.cookie("Age","24 years old");
    //4. Erpor amader k oboshoi response k end kore dite hobe. Response end korer jonno amra res.send() ba res.end() er j kono akti k call korte hobe.
    res.end("Successfully set cookies");
})

app.listen(8000,()=>{
    console.log('Server is running successfully');
})
```
### Code ta k run korale amra amder response peye jabo:
![](./images/1.png)
![](./images/2.png)
### As you can see amra amader desired response peye gelam.
### Browser(Firefox) tekhe Cookies dekhar joono inspect>storage tab>Cookies option.