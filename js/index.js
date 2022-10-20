window.onload = function init() {
    
        // $('.secao-1').removeClass(anime);
        // $('.secao-1').addClass(animationClass);
    

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


    // var btnMenu = $('.voltar-topo'),
    //     btnAnimado = ('.voltar-topo-1');
    // function animeMenu(){
    //     var documentTop = $(document).scrollTop();

    //     btnMenu(function(){
    //         if (documentTop > 1000){
    //             $(this).addClass(btnAnimado);
    //         }else{
    //             $(this).removeClass(btnAnimado);
    //         }
    //     });
    // }
    // animeMenu();
    
    
   
    $(document).scroll(function(){
        animeScroll()
    });

    
};



function subir(){
    $( 'html:not(:animated),body:not(:animated)' ).animate( { scrollTop: 0}, 600, function() {
        $(document).scrollTop(0)
    });
}