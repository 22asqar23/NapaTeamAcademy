$(document).ready(function () {
    var $windows = $(window);
    $windows.on('scroll', function () {
        var scroll = $windows.scrollTop();
        if (scroll > 34) {
            $(".header-nav").removeClass("main-nav-abs");
            $(".header-nav").addClass("main-nav-fix");
        } else {
            $(".header-nav").addClass("main-nav-abs");
            $(".header-nav").removeClass("main-nav-fix");
        }


    });




    $(".borderimg").on("click", function () {
       $("#text-section").toggleClass("height-400", "height-auto");
       $(this).toggleClass("rotate-text", "arrow-img");
    });


    $(".first-horizon").on("mouseenter", function () {
        $(".first-image-content").addClass("show");
        $(".first-image-content").removeClass("hide");
        $(".second-horizon").addClass("mrl");
    });

    $(".first-horizon").on("mouseleave", function () {
        $(".first-image-content").removeClass("show");
        $(".first-image-content").addClass("hide");
        $(".second-horizon").removeClass("mrl");

    });

    $(".second-horizon").on("mouseenter", function () {
        $(".second-image-content").addClass("show");
        $(".second-image-content").removeClass("hide");
        $(".third-horizon").addClass("mrl");
    });

    $(".second-horizon").on("mouseleave", function () {
        $(".second-image-content").removeClass("show");
        $(".second-image-content").addClass("hide");
        $(".third-horizon").removeClass("mrl");

    });

    $(".third-horizon").on("mouseenter", function () {
        $(".third-image-content").addClass("show");
        $(".third-image-content").removeClass("hide");
    });

    $(".third-horizon").on("mouseleave", function () {
        $(".third-image-content").removeClass("show");
        $(".third-image-content").addClass("hide");

    });



});
