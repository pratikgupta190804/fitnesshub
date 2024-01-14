
// function myFunction(){
//     var bars= $(".fa-bars");
//     bars.toggleClass("fa-xmark");
//     $('nav').toggleClass("nav-toggle");
// }
// function myFunction1(){
//     $('nav ul li a').toggleClass('fa-bars');
//     $('nav').removeClass('nav-toggle');
// }

$(document).ready(function(){

    $('.fa-bars').click(function(){
       $(this).toggleClass('fa-xmark');
       $('nav').toggleClass('nav-toggle');
    });

    $('nav ul li a').click(function(){
        $('.fa-bars').removeClass('fa-xmark');
        $('nav').removeClass('nav-toggle');
    });
    
    $(window).scroll(function(){
        if($(window).scrollTop() >= 20){
            $('header').addClass('active');
        }else{
            $('header').removeClass('active');
        }
    })
});