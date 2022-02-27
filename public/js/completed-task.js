$('li.todo-list-item').on('click', function (event) {
    let target = $(event.target);
    $("li.todo-list-item .todo-list-item-checkbox").removeClass("completed-task")
    target.toggleClass("completed-task")

    $("li.todo-list-item .todo-list-item-text, li.todo-list-item .todo-no, li.todo-list-item .todo-list-item-icon, li.todo-list-item .todo-list-item-checkbox").on('click', function (e) {
        e.stopPropagation();
    });

    if (target.hasClass("todo-list-item completed-task")) {
        $("li.todo-list-item.completed-task  .todo-list-item-checkbox").prop("checked", true);
    } else { 
        $("li.todo-list-item .todo-list-item-checkbox").prop("checked", false);
    }
});