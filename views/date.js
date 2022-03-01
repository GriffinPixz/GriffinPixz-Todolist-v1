// console.log(module);
// module.exports = "Hello World!";
// module.exports = getDate;

// ****************** Original Version ******************

module.exports.getDate = getDate;

function getDate() { 
// var getDate = function () {

    const today = new Date();

    // --- Get full date long format ---*
    let options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    let day = today.toLocaleDateString("en-US", options)
    return day;

}


module.exports.getDay = getDay;

function getDay() {
// var getDay = function () {

    const today = new Date();

    // --- Get only day name ---*
    let options = {
        weekday: 'long'
    };

    let day = today.toLocaleDateString("en-US", options)
    return day;

}

module.exports.getYear = getYear;

function getYear() {
// var getDay = function () {

    let today = new Date();

    // --- Get only day name ---*
    let options = {
        year: 'numeric',
    };

    let day = today.toLocaleDateString("en-US", options)
    return day;

}


// ****************** Shortened Version ******************

module.exports.getDateShort = function () {

    let today = new Date();

    let options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    return today.toLocaleDateString("en-US", options)

}

module.exports.getDayShort = function () {

    let today = new Date();

    // --- Get only day name ---*
    let options = {
        weekday: 'long'
    };

    return today.toLocaleDateString("en-US", options)

}


console.log(module.exports);

// console.log("✅ Everything works perfectly. GriffinPixz caught a GET request to \"/\".");