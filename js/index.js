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
    $(document).ready(function(){
        $('nav').fadeTo(1,0)
        $('nav').fadeTo(2000,1)
        $(".secao-1").fadeTo(1,0);
        $(".secao-1").fadeTo(500,1);

    });
    var $target = $('.anime'),
        animationClass = 'anime-start',
        offset = $(window).height() * 3/4;

    function animeScroll(){
        var documentTop = $(document).scrollTop();
    
        $target.each(function(){
            var itemTop = $(this).offset().top;
            if (documentTop > itemTop - offset){
                $(this).addClass(animationClass);
            }else{
                $(this).removeClass(animationClass);
            }
        });
    }
    animeScroll();
    $(document).scroll(function(){
        animeScroll()
    });
};