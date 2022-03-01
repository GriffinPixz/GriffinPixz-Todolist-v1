// alert("hi");
// $('.todo-nav-cat-link').on('click', function (event) {
//     if ($('.todo-nav-cat-link').hasClass("active") {

//     } else { 
//         $('.todo-nav-cat-link').attr("class", "active");
//     }
// });

// if ($("body").hasClass("Home")) {
//     $('.todo-nav-cat-link').removeAttr("class", "active")
//     $('.todo-nav-cat-link.home').attr("class", "active")
// } else if ($(body).hasClass("Work")) {
//     $('.todo-nav-cat-link').removeAttr("class", "active")
//     $('.todo-nav-cat-link.work').attr("class", "active")
// } else { 
//     $('.todo-nav-cat-link').removeAttr("class", "active")
//     $('.todo-nav-cat-link.today').attr("class", "active")
// }

$('.todo-nav-cat-link.home').on('click', function (e) {
    let targetNavLinkHome = $(e.target);
    // targetNavLink.attr("class", "active")
    targetNavLinkHome.addClass("active")
});

$("a.todo-nav-cat-link.home").click(function(e){
  e.target.addClass("active");
});

$('.button-switch li a').click(function (e) {
    e.preventDefault();
    $('li a', $(this).closest('ul')).removeClass('active');
    $(this).addClass('active');
});