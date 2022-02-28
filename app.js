const express = require('express')
const bodyParser = require("body-parser");

const app = express()
const port = 8000;

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));


// var toDoItem = "";
let toDoItems = [
    "Make Unicorn Tail smoothie for breakfast",
    "Go to Mr. McGriffith class's at 13:00 AM, North Pole Hall",
    "Study \"Moon Magic & Psychic Mediumship\" tonight",
    // "Go to class \"How To Fly Efficiently With Magic Broom\" with Professor Nicholas M. McGriffith at 13:31 AM",
];
let workToDoItems = [];
let homeToDoItems = [];
// let historyToDoItems = [];


app.get('/', (req, res) => {

    let today = new Date();

    // Get only day name
    // var options = { weekday: 'long' };

    // Get full date long format
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
    let day = today.toLocaleDateString("en-US", options)

    // res.render("index", { newDay: day, toDoListItems: toDoItems });
    res.render("index", { listTitle: day, toDoListItems: toDoItems });

    // console.log("✅ Everything works perfectly. GriffinPixz caught a GET request to \"/\".");

});

app.post("/", (req, res) => { 

    console.log(req.body);

    let htmlData = req.body;

    let toDoItem = htmlData.newItem;
    console.log("* To do item => " + toDoItem);

    // toDoItems.push(toDoItem);

    // res.redirect("/");

    if (htmlData.toDoListTitle === "Work") {
        workToDoItems.push(toDoItem);
        res.redirect("/worklist");
    } else { 
        toDoItems.push(toDoItem);
        res.redirect("/");
    }
});


app.get('/work', (req, res) => { 
    res.render("index", { listTitle: "Work", toDoListItems: workToDoItems });
});

app.post('/work', (req, res) => { 
    let workData = req.body;
    let workToDoItem = workData.newItem;
    workToDoItems.push(workToDoItem);

    res.redirect("/worklist");
});


app.get('/home', (req, res) => { 
    res.render("index", { listTitle: "Home", toDoListItems: homeToDoItems });
});

app.post('/home', (req, res) => { 
    let workData = req.body;
    let workToDoItem = workData.newItem;
    workToDoItems.push(workToDoItem);

    res.redirect("/home");
});


app.get('/about', (req, res) => { 
    res.render("about");
});


app.listen(port, () => { 
    console.log("🦄💘 GriffinPixz server is listening on port => http://localhost:" + port + "/");
});
