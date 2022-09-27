
function createSlick() {
    $(".slider").not('.slick-initialized').slick({

        autoplay: true,
        dots: true,
        arrows: true,
        slidesToShow: 3,
        responsive: [{
            breakpoint: 768,
            settings: {
                dots: false,
                arrows: false,
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 4
            }
        }]
    });

}
createSlick();
$(window).on('resize', createSlick);

