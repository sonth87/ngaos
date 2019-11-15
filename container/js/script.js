$(document).ready(function() {
    $('.sub-menu .hamberger').on('click', function() {
        $(this).closest('.sub-menu').toggleClass('open');
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
                    slidesToScroll: 2,
                    // arrows: false,
                    // slidesPerRow: 2,
                    // rows: 2,
                }
            }
        ]
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
