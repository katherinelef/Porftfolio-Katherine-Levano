$(function (){
    $(window).scroll(function(){
       if ($(this).scrollTop() > 100) {
        $('.navbar').addClass("azul");
       } else {
        $(".navbar").removeClass("azul");
       }
    });
});