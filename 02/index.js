//1. amra 2 vabe express k import korte pari:
//2. 1st type:
const express = require('express');
//3. 2nd type:
// import express from 'express'; //3.1 jodi o aivabe o import kora jai tobe aikhane amra ata k use korte parbo na. Ata k use korte hole package.json file a ("type": "module") ai property add korte hobe. Modified pacackage.json tar example ai js code er nichei dewa hoyeche .md file a.

//4. Erpor amra application ti make korbo:
const app = express();//4.1 ata amader akti express app banai dibe.

//6. Then ashun akhane kuv simple akta get method make kora jak:
app.get('/',function(req,res){
    res.send('Hello Express Js Hello')
})

//5. Akhon ai j amra application ti k make korlam sheta k amader akta port diye listen korate hobe jate oi port diye kono request ashle shetar against a response pataite pari.
app.listen(8000,()=>{
    console.log('Server is running successfully');
})