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

//1. Download response korer jonno ami akhane notun akta route create kore nicci.
app.get('/five', function(req,res){
    //2. Toh file k download koranor jonno amader project directory er root a "uploads" namer akta folder create korechi. And er bithore '1.png' namer akta image rekhe diyechi.
    //3. Download response korer jonno res.download() method use korte hobe. Apni kon file k download korate cacchen shei file er j path, sheta res.download() method er parameter hishebe diye dite hobe.
    res.download("./uploads/1.png");  
})


app.listen(8000,()=>{
    console.log('Server is running successfully');
})