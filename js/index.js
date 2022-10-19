window.onload = function init() {

    let mobile = $('body').width();

    if (mobile < 1000) {

        $(document).ready(function () {
          $('.carousel').slick({
            dots: true,
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
          });
        });
    }
    else{
        $(document).ready(function(){
        $('.carousel').slick({
            dots: true,
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
        });
    });
}
};