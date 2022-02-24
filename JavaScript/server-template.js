const express = require('express')
const bodyParser = require("body-parser");

const app = express()
const port = 3000;

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");

    console.log("GriffinPixz caught a GET request to \"/\"");
})

app.post("/", (req, res) => { 
    // body-parser example
    const newVar = req.body.someVarValue;
    console.log("* var value => " + newVar);
});

app.listen(port, () => { 
    console.log("🦄💘 GriffinPixz Server is listening on port => http://localhost:" + port + "/");
});






// **********************************************************

const express = require('express')
const bodyParser = require("body-parser");

const app = express()
const port = 3000;

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    // console.log(req);

    // *** Note that - res.send() can only send back one response per 
    // request route while res.write() can send multiple responses ***
    // res.sendFile(__dirname + "/index.html");
    res.send('Hello GriffinPixel!')
    
    console.log("GriffinPixz caught a GET request to \"/\"");
})

app.post("/", (req, res) => { 
    const newVar = req.body.someVarValue;
    console.log("* var value => " + newVar);

});

app.listen(port, () => { 
    console.log("🦄💘 GriffinPixz Server is listening on port => http://localhost:" + port + "/");
});