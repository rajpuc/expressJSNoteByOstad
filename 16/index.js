const express = require('express');
const app = express();

app.get('/',function(req,res){
    
    //1.Request query niye kaj korer jonno 'req.query.parameterName' ei format a apnake query parameter k access korte hobe like below:
    let firstName=req.query.firstName;  
    let lastName=req.query.lastName;  
    res.end(firstName +" "+lastName);
}); 
app.listen(8000,()=>{
    console.log('Server is running successfully');
})