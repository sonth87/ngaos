$(document).ready(function() {
    $(".sub-menu .hamberger").on("click", function() {
        $(this)
            .closest(".sub-menu")
            .toggleClass("open");
        $("body").toggleClass("menu-open");
    });

    $(".slide-banner").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 15000,
        arrows: false,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });

    $(".block-2 .slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 15000,
        arrows: true
    });

    $(".block-3 .slider").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        infinite: false,
        dots: true,

        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                    // arrows: false,
                    // slidesPerRow: 2,
                    // rows: 2,
                }
            }
        ]
    });

    $(".filter-color, .filter-price, .product-sort").on("click", function(e) {
        e.stopPropagation();
        $(".product-list-action .open").removeClass("open");
        $(this).toggleClass("open");
    });

    $(".product-list-action .selection-list .item").on("click", function(e) {
        e.stopPropagation();

        // selection item action
        alert("selected : " + $(this).attr("data-value"));

        $(".product-list-action .open").removeClass("open");
    });

    $(document).on("click", function() {
        $(".filter-color, .filter-price, .product-sort").removeClass("open");
    });

    $(".product-list-action .filter-header").on("click", function() {
        $(".product-sort, .product-filter").toggleClass("d-none");
        $(this).toggleClass("open");
    });

    $(document).scroll(function(e) {
        var scroll = $(document).scrollTop();
        var min_height = 50,
            height = 63;
        if (scroll > 0) {
            $("body").addClass("fixed-header");
            $("body").css({
                "padding-top": height + "px"
            });
            $(".header").css({
                top: 0,
                height:
                    scroll == 0 && $(".header").height() > min_height
                        ? height - scroll / 5
                        : min_height
            });
        } else {
            $("body").removeClass("fixed-header");
            $("body, .header").removeAttr("style");
        }
    });
});
