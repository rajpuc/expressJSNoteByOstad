const express = require('express');
const app = express();

app.post('/',(req,res)=>{
  //1. Get requester a apni jvabe header niye kaj korecilen pos a o tik same process a apnake header niye kaj korte hobe. Tahole amra already jani header niye kaj korer jonno amader k req.header() k use korte hobe like below:
  let userName =req.header('userName');
  let password =req.header('password');
  res.send("user name :"+userName+" Password :" + password);
}

); 
app.listen(8000,()=>{
    console.log('Server is running successfully');
})