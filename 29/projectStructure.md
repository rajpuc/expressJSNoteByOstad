## Ai tutorial amra project er structure shomporkhe janbo.
- ### Widely project structure make korer jonno MVC(Model, View, Controller) architectural design pattern ti follow kore thaki. 
- ### This is not only for nodejs/expressjs, but also for laravel,codignator,.net a o ai structure use kore apni web application banate parben.
- ### Jokon amra Monolithic Application make kori, j application er moddhe client side and server side 2ta eksathe takhe shekhetre amra MVC design pattern ta peye jai. Akhon ai MVC er moddhe M&C(model,controller) related hocce server side er sathe. And j V(view) er ongshoti ache sheti related hocce client side er sathe. Orthad jokon amra Monolithic application create korci jekhane serverside and client side eksathe takhe shekhane amader MVC er puro bishoita shei design er moddhe chole ashe.
- ### But amra jokon REST api develop korci, tokon amra jani j REST api shudu server side manage kore. Toh jehetu Rest api suhudu matro server side k manage kore tai rest api er khetre server side er jonno Model and Controller takhe shudu View takhe na. Toh ai jonno amader j REST api development approch hobe ba design pattern hobe sheta absolutely MVC structure but REST api jehetu Server Side operations niye kaj korbe tai aikhane View takhbe na. Orthad ata k amra in-short MC(Model,Controller) bolte pari.

## Akhon amader j project structure hobe shei project structure er moddhe takbe:
- ### index.js - Amader application er starting file. Ai index.js amader application k start korbe.
- ### App.js - index.js er por important file hocce app.js. Project er proyojone Jotodoroner middleware configure kora dorkar, jotodoroner service configure kora dorkar, jotodoroner security middleware configure kora dorkar tar shob kicui amader app.js er moddhe configure kora takhbe. And Routing er bishoigula o app.js er moddhe configure kora takhbe.
- ### Config.env - Toh environment variable gular j file gula takhe shegula vibinno somoy vibinno name a takhe jemon: config.env,production.env,development.env ba shudui `.env`. Toh file er name jai hok na kno shei file er kaj hocce environment variable gula k manage kora.
    - ### Environment variable hocce apner puro application jure j variable gula akdom constant hishebe takhbe shei variable gula ashole environment variable. J variable er value gula onk beshi sensetive hoi jemon: DB er connection string, DB er username & password, DB er Server address,ip address, Api key, ba onno kono secret credentials ai doroner sensetive data gula amra `.env` file er bithore rekhe dei. `.env` file er moddhe kono variable er value rekhe dile jta subidha hoi sheta hocce production a jokon amra amader application k deploy kori, deploy korer pore amra .env file er variable er value gula k amra amader proyojono anushari kub easily change korte pari.
- ### Routes/Routes.js - Routing end point gula k handel korer jonno Routes.js create korte hobe. And routing er jonno file 1ti o hote pare abr ekhadik o hote pare. And ai route shorashori connect takhbe controller er sathe.
- ### Controller/Controller.js - Proyoujon onushare controller amader project a 1ti o pare abr ekhadik o hote pare. Controller jokon kono request k process korbe, request process korer shomoy tar model er proyojon hote o pare abr na o hote pare. 
- ### Model/Model.js -  Rest api develop korer jonno amra jodi MongoDB driver mongoose use kori tahole mongoose er j schema defination gula amra create korbo, data create,read,update,delete korer jonno shei schema definition gula amra Model.js file er moddhe mange korbo. And proyojon onujayi model er file 1ti o hote pare abr ekhadik o hote pare.

## So, akon practically bishoy gula k dekha jak:
1. ### Create a project folder.
2. ### Create package.json by running on terminal `npm init -y`.
3. ### install express by running on terminal `npm i express`
4. ### install node packages by running on terminal `npm i body-parser cookie-parser multer jsonwebtoken mysql mongoose dotenv cors express-mongo-sanitize express-rate-limit helmet hpp xss-clean`
5. ### create index.js at root directory by running on terminal `touch index.js`
6. ### create app.js at root directory by running on terminal `touch app.js`
7. ### create config.env at root directory by running on terminal `touch config.env`
8. ### Create `src` directory by running on terminal `mkdir src`
9. ### Create `src/Controllers` folder by running on terminal `mkdir src/controllers`
10. ### Create `src/Models` folder by running on terminal `mkdir src/models`
11. ### Create `src/routes` folder by running on terminal `mkdir src/routes`
12. ### Create `src/middleware` folder by running on terminal `mkdir src/middleware`
12. ### Create `src/helper` folder by running on terminal `mkdir src/helper`
