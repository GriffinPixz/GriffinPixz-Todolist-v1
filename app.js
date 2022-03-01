const express = require('express')
const bodyParser = require("body-parser");
const date = require(__dirname + "/views/date.js");

// console.log(date);

const app = express()
const port = 8000;

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

// ******************** Variables ********************
// var toDoItem = "";
let todayToDoItems = [
    "Make Unicorn Tail smoothie for breakfast",
    "Go to Mr. McGriffith class's at 13:00 AM, North Pole Hall",
    "Study \"Moon Magic & Psychic Mediumship\" tonight",
    // "Go to class \"How To Fly Efficiently With Magic Broom\" with Professor Nicholas M. McGriffith at 13:31 AM",
];

let homeToDoItems = [
    "Go grocery shopping: Cow milk, Oat milk, Mozzarella cheese, Pastas, Avocado, Eggs, Sauces, Broccoli, Bell peppers, Onions, Garlics, Chicken, Beef, Yoghurt, Green tea powder, Tea",
    "Cook delicious dinner and take out trash",
    "Organize living room"
];

let workToDoItems = [
    "Finish client's web design",
    "Update portfolio"
];

// let historyToDoItems = [];

let year = date.getYear();

// ******************** Today ********************
app.get('/', (req, res) => {

    // let day = date();
    let day = date.getDate();
    // let day = date.getDay();

    // res.render("index", { newDay: day, toDoListItems: todayToDoItems });
    res.render("index", { listTitle: day, toDoListItems: todayToDoItems, thisYear: year });

});

app.post("/", (req, res) => { 

    console.log(req.body);

    let htmlData = req.body;

    let toDoItem = htmlData.newItem;
    console.log("* To do item => " + toDoItem);

    // toDoItems.push(toDoItem);

    // res.redirect("/");

    if (htmlData.toDoListTitle === "Home") {
        homeToDoItems.push(toDoItem);
        res.redirect("/home");
    } else if (htmlData.toDoListTitle === "Work") {
        workToDoItems.push(toDoItem);
        res.redirect("/work");
    } else { 
        todayToDoItems.push(toDoItem);
        res.redirect("/");
    }
});

// ******************** Home ********************
app.get('/home', (req, res) => { 
    res.render("index", { listTitle: "Home", toDoListItems: homeToDoItems, thisYear: year });
});

app.post('/home', (req, res) => { 
    let homeData = req.body;
    let homeToDoItem = homeData.newItem;
    homeToDoItems.push(homeToDoItem);

    res.redirect("/home");
});

// ******************** Work ********************
app.get('/work', (req, res) => { 
    res.render("index", { listTitle: "Work", toDoListItems: workToDoItems, thisYear: year });
});

app.post('/work', (req, res) => { 
    let workData = req.body;
    let workToDoItem = workData.newItem;
    workToDoItems.push(workToDoItem);

    res.redirect("/work");
});



app.get('/about', (req, res) => { 
    res.render("about");
});


app.listen(port, () => { 
    console.log("🦄💘 GriffinPixz server is listening on port => http://localhost:" + port + "/");
});
