const app = require("./app.js");
const dotenv = require("dotenv");
dotenv.config({path : './config.env'});

app.listen(process.env.RUNNING_PORT,()=>{
    //Remember : .env file er moddhe Variabel likhba uppercase a, and Variable er value likhar time a ""/'' use korba na.
    console.log("This is from env " + process.env.RUNNING_PORT);
})