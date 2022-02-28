// $(".todo-list-item").on('click', function () {
//     $(".todo-list-item-checkbox").prop("checked", true); 
// });



// $(".todo-list-item").on('click', function () {

//     let count = 0;
//     let counter = "count" + count;
    
//     $(".todo-list-item-checkbox").attr("class", counter)
//     $("."+counter).prop("checked", true); 
    
//     count++;

    
// });

// let num = 0;
// let number = "count" + num;


// $(".count").on('click', function () {
//     $(".todo-list-item-checkbox").prop("checked", true); 
//     $(".todo-list-item").attr("class", "completed-task");
// });


// $(toDoItems[i]).on('click', function () {

//     // let count = 0;
//     // let counter = "count" + count;
    
//     // $(".todo-list-item-checkbox").attr("class", counter)
//     // $("."+counter).prop("checked", true); 

//     $(".todo-list-item-checkbox").prop("checked", true); 

//     // count++;

    
// });




// function completed() {
//             $(".todo-list-item").toggleClass("completed-task")
//             // $("#count" + i).toggleClass("completed-task")
//         }

//         function completed(e) {
//             $('.todo-list-item', $(this).closest('ul')).toggleClass("completed-task")
//             // $("#count" + i).toggleClass("completed-task")
//         }

//         $('.button-switch li a').click(function (e) {
//                 e.preventDefault();
//                 $('li a', $(this).closest('ul')).removeClass('active');
//                 $(this).addClass('active');
//             });



// let historyToDoItems = [];


    // document.querySelector('li.todo-list-item').on('click', function (e) {
    //     let target = e.target;
    //     historyToDoItems.push(target);
    //     target.hide();

    //     console.log(historyToDoItems);

    //     // if (target.is('li.todo-list-item')) {
    //     //     target.hide();
    //     // }
    // });

    

$('li.todo-list-item').on('click', function (event) {
    let target = $(event.target);
    $("li.todo-list-item .todo-list-item-checkbox").removeClass("completed-task")
    target.toggleClass("completed-task")

    if (target.hasClass("todo-list-item completed-task")) {
        $("li.todo-list-item.completed-task  .todo-list-item-checkbox").prop("checked", true);
    } else { 
        $("li.todo-list-item .todo-list-item-checkbox").prop("checked", false);
    }

    $("li.todo-list-item .todo-list-item-text, li.todo-list-item .todo-no, li.todo-list-item .todo-list-item-icon, li.todo-list-item .todo-list-item-checkbox").on('click', function (e) {
        e.stopPropagation();
    });
});

    // target.toggleClass("completed-task")

    // $("li.todo-list-item.completed-task  .todo-list-item-checkbox").prop("checked", true);
    // $("li.todo-list-item  .todo-list-item-checkbox").prop("checked", false);

    // if (target.hasClass("completed-task")) {
    //     $("li.completed-task .todo-list-item-checkbox").prop("checked", true);
    // } else { 
    //     $("li.todo-list-item .todo-list-item-checkbox").prop("checked", false);
    // }



    // if ($(".todo-list-item-checkbox").prop("checked", true)) {
    //     $("li.todo-list-item").addClass("completed-task");
    // } else {
    //     $("li.todo-list-item").removeClass("completed-task");
    // }
    
    // $(".todo-list-item-checkbox").on('click', function (event) {
    //     $(event.target).prop("checked", true);
    //     $('li.todo-list-item').addClass("completed-task")
    // }

    // if ($('li.todo-list-item').hasClass("completed-task")) {
    //     $("li.completed-task .todo-list-item-checkbox").prop("checked", true);
    // } else { 
    //     $("li.todo-list-item .todo-list-item-checkbox").prop("checked", false);
    // }

    // if (target.hasClass("completed-task")) {
    //     $(".todo-list-item-checkbox").prop("checked", true);
    // } else { 
    //     $(".todo-list-item-checkbox").prop("checked", false);
    // }
    
    // $(".completed-task .todo-list-item-checkbox").prop("checked", true); 

    // $('.todo-list-item-text').preventDefault() 

    // historyToDoItems.push(target);
    // console.log(historyToDoItems);

    // if (target.is('li.todo-list-item')) {
    //     target.removeClass("completed-task");
    // }
// });

// $("li.todo-list-item.completed-task").on('click', function (evt) { 
//     $(evt.target).prop("checked", false);
//     // $(".todo-list-item-checkbox").prop("checked", false);
// });



    // if ($('li.todo-list-item').hasClass("completed-task")) {
    //     $("li.completed-task .todo-list-item-checkbox").prop("checked", true);
    // } else { 
    //     $("li.todo-list-item .todo-list-item-checkbox").prop("checked", false);
    // }

// $("li.todo-list-item .todo-list-item-text, li.todo-list-item .todo-no, li.todo-list-item .todo-list-item-icon ").on('click', function (e) {
//     e.stopPropagation();
//     // e.stopImmediatePropagation();
// });

// $("li.todo-list-item todo-list-item-text, li.todo-list-item todo-no, li.todo-list-item todo-list-item-icon ").click(function(e) {

// $('.todo-list-item-text').on('click', function (event) {
//     event.preventDefault() 
// });
