$('.reviews__slider').slick({
    infinite: true,
    fade: true,
    dots: true,
    centerMode: true,
    arrows: false,
    autoplay: true,
    autoSpeed: 10000
});

$('.mentors__slider').slick({
    infinite: true,
    fade: true,
    dots: true,
    centerMode: true,
    arrows: false,
    autoplay: true,
    autoSpeed: 10000
});

$('.course__slider').slick({
    slidesToShow: 3,
    arrows: false,
    dots: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                dots: true,
                infinite: true
            }
        },

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                dots: true,
                infinite: true
            }
        },
    ]
    
})

