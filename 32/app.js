const express = require('express');
const router = require('./src/routes/api');
const app = new express();

//security middleware import
const rateLimit =  require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');


//security middleware use in out application
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

//Request rate limiting
const limiter = rateLimit({
    windowMs:15*60*60,
    max:100
})
app.use(limiter);


app.use("/api/v1",router);



app.use('*',(req,res)=>{
    res.status(404).json(
        {
            status:"fail",
            data: "Not Found"
        }
    )
});

module.exports = app;