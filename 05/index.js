const express = require('express');
const app = express();

app.get('/',function(req,res){
    res.send('Home Page');
})

app.post('/about',function(req,res){
    res.send('About Page');
})

app.put('/contact',function(req,res){
    res.send('Contact Page');
})

app.delete('/terms',function(req,res){
    res.send('Terms Page');
})

app.listen(8000,()=>{
    console.log('Server is running successfully');
})