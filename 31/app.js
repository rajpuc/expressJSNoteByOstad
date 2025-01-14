const express = require('express');
const router = require('./src/routes/api');
const app = new express();

app.use("/api/v1",router);


//jehetu configuration shongkranto shobkicui takbe app.js file a. Tai undefined route jgula takhbe shegula amra  app.js er moddhei configure korbo
app.use('*',(req,res)=>{
    res.status(404).json(
        {
            status:"fail",
            data: "Not Found"
        }
    )
});

module.exports = app;