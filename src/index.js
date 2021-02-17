$(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
        $("#menu").addClass("navbar-inner_white");
    } else {
        $("#menu").removeClass("navbar-inner_white");
    }
});
