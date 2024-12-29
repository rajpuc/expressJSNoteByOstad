## My first express js application:
- ### Toh expressjs application make korer jonno prothomei amader package.json file make kore nite hobe.
- ### `npm init --y` ai command ta terminal a run koralei package.json file create hoye jabe like below:
```javascript
//package.json
{
  "name": "02",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
- ### Expressjs jehetu framework, ata k use korte hole first a ata k download kore nite hobe. `npm install express --save` ai command terminal a run koralei express amader project er moddhe download hoye jabe.
- ### Erpor ami amader project er root a(02 folder a) notun akta file `index.js` create kore nibo. Ai file er moddhei amra amader first express js application ti make korbo. Toh express js application ti make korer jonno amra kintu already j expressjs-dependency ta[package.json file er `dependencies` property te gelei dekhte pabe] sheta install kore felechi:

```javascript
//package.json
{
  "name": "02",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.21.2"
  }
}
```
- ### So now lets create our first express application:
- ### akhon amra express js k use korer jonno firstei, amader `index.js` file er moddhe express k import kore nibo:

```javascript
//index.js

//1. amra 2 vabe express k import korte pari:
//2. 1st type:
const express = require('express');
//3. 2nd type:
// import express from 'express'; //3.1 jodi o aivabe o import kora jai tobe aikhane amra ata k use korte parbo na. Ata k use korte hole package.json file a ("type": "module") ai property add korte hobe. Modified pacackage.json tar example ai js code er nichei dewa hoyeche [MyFIrstExpressJSApplication.md file a.]

//4. Erpor amra application ti make korbo:
const app = express();//4.1 ata amader akti express app banai dibe.

//6. Then ashun akhane kuv simple akta get method make kora jak:
app.get('/',function(req,res){
    res.send('Hello Express Js')
})

//5. Akhon ai j amra application ti k make korlam sheta k amader akta port diye listen korate hobe jate oi port diye kono request ashle shetar against a response pataite pari.
app.listen(8000,()=>{
    console.log('Server is running successfully');
})
```
- ### akhon amra `node index.js` command terminal a run korale amader application run hoye jabe. Tobhe as you know ai command diye amader application run koranor pore abr jodi amra file er moddhe kono change niye ashe tahole amader k application ta k stop kore abr run korate hoi. Ata tekhe bachar jonno amra `node --watch index.js` ai command use korte pari tobe er jonno nodejs er version `v18.11.0 or later` hote hobe .

### `import express from 'express';` use korer jonno modified `package.json` file:
```javascript
//package.json
{
  "name": "02",
  "version": "1.0.0",
  "type": "module",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.21.2"
  }
}
```
