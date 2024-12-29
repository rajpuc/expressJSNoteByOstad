## Ei tutorial a amra simple string response kora shikbo.
```javascript
//index.js
const express = require('express');
const app = express();

//1. Simple string response apni jkono method diye dite paren aikhane ami get and post diye dekhacci. Tobe Simple string response er jonno get method e beshi juktijukto.
app.get('/one',function(req,res){
    //2. Jehetu amra simple string response dibo tai amra res parameter tekhe send() method ta use korbo.Cause simple string response er jonno atai use hoi.
    res.send('This is simple string response');
})

app.post('/two',function(req,res){
    res.send('This is simple string response');
})


app.listen(8000,()=>{
    console.log('Server is running successfully');
})
```
### Cholun ata k akn postman a test kora jak:
![](./images/1.png)
- ### As you can see amra amader desire output peye geci.
### Apni caile simple string response `res.end()` method use koreo patate paren:
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


app.listen(8000,()=>{
    console.log('Server is running successfully');
})
```
## Ei `res.send()` and ei `res.end()` methoder moddhe kintu difference ache:
- ### `res.send()` - response er body k indicate kore.
- ### `res.end()`  - response er end state k indicate kore.
