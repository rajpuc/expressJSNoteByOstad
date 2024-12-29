
const express = require('express');
 

const app = express();

app.get('/',function(req,res){
    res.send('Home Page');
})
//1. Postman a sob method k test korer jonno ami about ta k diye dicci post method.
app.post('/about',function(req,res){
    res.send('About Page');
})
//2.tarpor Contact ta k diye dilam put method.
app.put('/contact',function(req,res){
    res.send('Contact Page');
})
//3. tarpore terms ta k diye dilam delete method.
app.delete('/terms',function(req,res){
    res.send('Terms Page');
})

app.listen(8000,()=>{
    console.log('Server is running successfully');
})