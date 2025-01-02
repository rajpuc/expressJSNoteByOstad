const express = require('express');
const multer = require('multer');
const app = express();
const multerInstance = multer();
//1.Toh multer diye file upload korer jonno multerInstance tekhe multerInstance.diskStorage() method k use korte hobe.
var storage = multer.diskStorage({
  //3. ai destination property er moddhe amader abr akti callback function define kore dite hobe jta 3ta parameter nibhe:request,file & callback function.
  destination:function(req,file,callback){
    //4.Then aikhan tekhei amader callback k call kore dite hobe, and ei callback er argument hishebe amader first parameter null and 2nd parameter a amra file ta k j path a upload korte cacci sheta diye dite hobe.
    callback(null,'./uploads')
  },
  //5. Ekivabe filename a o akti callback function define kore dite hobe jta o 3ta parameter nibhe:request,file & callback function.
  filename:function (req,file,callback){
    //6.Ekivabe amra aikhanteke o callback takhe call dibo like below:
    callback(null,file.originalname);
  }
});//2. Ei method argument hishebe akta object nibe.And ai object er moddhe amader 2ta property define kore dte hobe 'destination' & 'filename', jmn ta aikhane kore dewa ace.

//7. akhon multer.diskStorage() diye j amra storage create kore nilam shei storage k aikhane initiate kore nite hobe like below:
var upload = multer({storage:storage}).single('myfile');

app.post('/',(req,res)=>{
  //8. then jokon amra post request a kono file pabo tokon shei file ta multer diye j 'upload' make kore niyechi sheta k niche dekhano example er moto kore call korte hobe:
  upload(req,res,function(err){
    if(err){
      return res.end("Error uploading file.");
    }
    res.end("File is uploaded successfully!")
  });
  
}); 

app.listen(8000,()=>{
    console.log('Server is running successfully');
})