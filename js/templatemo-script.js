var flag = true;
$(function() {
    $(".navbar-toggler").on("click", function(e) {
        var arrow = document.getElementById("arrow");
        if (flag) {
            arrow.style.transform = 'scaleX(-1)';
            flag = false;
        } else {
            arrow.style.transform = 'scaleX(1)';
            flag = true;
        }
        $(".tm-header").toggleClass("show");
        e.stopPropagation();
    });

    $("html").click(function(e) {
        var header = document.getElementById("tm-header");

        if (!header.contains(e.target)) {
            $(".tm-header").removeClass("show");
        }
    });

    $("#tm-nav .nav-link").click(function(e) {
        $(".tm-header").removeClass("show");
    });
});