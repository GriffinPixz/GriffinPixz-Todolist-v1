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
// let historyToDoItems = [];


app.get('/', (req, res) => {

    let today = new Date();

    // Get only day name
    // var options = { weekday: 'long' };

    // Get full date long format
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
    let day = today.toLocaleDateString("en-US", options)

    res.render("index", { newDay: day, toDoListItems: toDoItems });
    // res.render("index", { listTitle: day, toDoListItems: toDoItems });

    // console.log("✅ Everything works perfectly. GriffinPixz caught a GET request to \"/\".");

});

app.post("/", (req, res) => { 

    let htmlData = req.body;
    console.log("* data value => " + htmlData.newItem);

    let toDoItem = htmlData.newItem;
    toDoItems.push(toDoItem);

    res.redirect("/");

    // document.querySelector('li.todo-list-item').on('click', function (e) {
    //     let target = e.target;
    //     historyToDoItems.push(target);
    //     target.hide();

    //     console.log(historyToDoItems);

    //     // if (target.is('li.todo-list-item')) {
    //     //     target.hide();
    //     // }
    // });
});


app.get('/worklist', (req, res) => { 
    res.render("index", { listTitle: "Work To Do List", toDoListItems: workToDoItems });
});
app.post('/worklist', (req, res) => { 
    let workData = req.body;
    let workToDoItems = workData.newItem;
    workToDoItems.push(workToDoItems);

    res.redirect("/worklist");
});



app.listen(port, () => { 
    console.log("🦄💘 GriffinPixz server is listening on port => http://localhost:" + port + "/");
});