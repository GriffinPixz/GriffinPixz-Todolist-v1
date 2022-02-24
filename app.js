const express = require('express')
const bodyParser = require("body-parser");

const app = express()
const port = 8000;

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));


// var toDoItem = "";
var toDoItems = [
    "Study \"Moon Magic & Psychic Mediumship\" tonight",
    "Go to class \"How To Fly Efficiently With Magic Broom\" with Professor Nicholas M. McGriffith at 13:31 AM",

];


app.get('/', (req, res) => {

    var today = new Date();

    // Get only day name
    // var options = { weekday: 'long' };

    // Get full date long format
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
    var day = today.toLocaleDateString("en-US", options)

    res.render("index", { newDay: day, toDoListItems: toDoItems });

    // console.log("✅ Everything works perfectly. GriffinPixz caught a GET request to \"/\".");

});


app.post("/", (req, res) => { 

    var htmlData = req.body;
    console.log("* data value => " + htmlData.newItem);

    var toDoItem = htmlData.newItem;
    toDoItems.push(toDoItem);

    res.redirect("/");

});


app.listen(port, () => { 
    console.log("🦄💘 GriffinPixz server is listening on port => http://localhost:" + port + "/");
});