const express = require('express');
const app = express();

app.get('/',function(req,res){
    
    //1.Request er Header niye kaj korer jonno amra 'req' parameter tekhe req.header() k use korte hobe. And er parameter hishebe kon property k amra access korte cacci sheta bole dibo:
    let firstName= req.header('firstName');//2. Tahole firstName namer kono header property diye jodi amra request patai tahole shei property er value amra aikhane peye jabo. 
    //3. Akhivabe amra baki header property gula k access korte parbo:
    let lastName = req.header('lastName');
    res.end(firstName + ' '+lastName);
}); 
app.listen(8000,()=>{
    console.log('Server is running successfully');
})