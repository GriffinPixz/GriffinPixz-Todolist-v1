app.get('/', (req, res) => {
    // res.sendFile(__dirname + "/index.html");

    var today = new Date();
    var currentDay = today.getDay();

    var options = { weekday: 'long' };
    var dayName = new Intl.DateTimeFormat('en-US', options).format(currentDay);

    // if (today.getDay() === 6 || today.getDay() === 0) {
    if (currentDay === 6 || currentDay === 0) {
        res.write("<h1>Yay, it's the weekend!</h1>");
    } else {
        res.write("<h1 style=\"font-size: 3rem;\">Today is <i>" + dayName + "</i></h1>");
        res.write("<h1>Wahh, I have to work  (> . <)</h1>");
        res.write("<h3>It's gonna be an awesone work day though. Fighting!</h3>");
        res.send();
        // res.sendFile(__dirname + "/index.html");
    }

    // Option 2: GET day's name - Angela's method 
    var today = new Date();
    var currentDay = today.getDay();
    var day = "";

    // Option 2.1 *****
    if (currentDay === 6 || currentDay === 0) {
        day = "Weenend";
        // res.render("index", {dayType: "Weekend"});
    } else { 
        day = "Weekday";
        // res.render("index", {dayType: "Weekday"});
    }
    
    res.render("index", { dayType: day });
    
    // Option 2.2 *****
    switch (currentDay) { 
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            console.log("Error: current day is equal to: " + currentDay);
    }

    res.render("index", {dayType: day});
});