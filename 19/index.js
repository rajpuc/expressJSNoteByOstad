const express = require('express');
const app = express();

app.post('/',(req,res)=>{
  //1. Get requester er mothoi aikhane o 'req.query.parameterName' ai format a query parameter k access kore kaj korte hobe like below:
  let firstName=req.query.firstName;
  let lastName =req.query.lastName;
  res.send(firstName +' '+lastName);
}

); 
app.listen(8000,()=>{
    console.log('Server is running successfully');
})