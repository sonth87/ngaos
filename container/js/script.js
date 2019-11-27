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

    if ($(document).width() <= 480) {
        $(".block-3 .slider").slick({
            rows: 2,
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            infinite: false,
            dots: true
        });
    } else {
        $(".block-3 .slider").slick({
            rows: 1,
            slidesToShow: 4,
            slidesToScroll: 4,
            arrows: false,
            infinite: false,
            dots: true
        });
    }

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

    // Header
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
                        : min_height,
                "box-shadow": "0px 0px 5px 0px rgba(0, 0, 0, 0.2)"
            });
        } else {
            $("body").removeClass("fixed-header");
            $("body, .header").removeAttr("style");
        }
    });

    if ($(document).width() <= 480) {
        if ($(".product-detail-img-list").length > 0)
            $(".product-detail-img-list").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                autoplay: true,
                autoplaySpeed: 15000,
                arrows: true
            });
    } else {
        if ($(".product-detail-content").length > 0)
            $(".product-detail-content").scrollToFixed({
                marginTop: $('.header').outerHeight(true) + 10,
                limit: function() {
                    return $(".product-description-container").offset().top - $(this).outerHeight(true) - 10;;
                },
            });
        if ($(".cart-summary").length > 0)
            $(".cart-summary").scrollToFixed({
                marginTop: $('.header').outerHeight(true) + 10,
                limit: function() {
                    return $(".st-footer").offset().top - $(this).outerHeight(true) - 10;;
                },
            });
    }

    $(".header-function .account").on("click", function() {
        $("#account-control").modal("show");
    });

    // Login action
    $('.do-login').on('click', function() {
        if(!$('#account-control').is(':visible')) {
            $('#account-control').modal('show')
        }
        $('#account-control .account-form').addClass('login')
        $('#account-control .account-form').removeClass('register')
    })

    // Register action
    $('.do-register').on('click', function() {
        if(!$('#account-control').is(':visible')) {
            $('#account-control').modal('show')
        }
        $('#account-control .account-form').removeClass('login')
        $('#account-control .account-form').addClass('register')
    })
});
