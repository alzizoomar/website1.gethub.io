/*global $, alert, console, window*/
$(function () {
    
//adjust header height
    'use strict';
    var myHeader = $('.header'), mySlider = $('.bxslider');
    myHeader.height($(window).height());
    
    $(window).resize(function () {
        
        myHeader.height($(window).height());
        mySlider.each(function () {
            $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
        });
        
    });
//link add active class
    $('.links li a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    mySlider.each(function () {
        $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
    });
//trigger the bxslider
    mySlider.bxSlider({
        pager: false
    });
    
    $('.links li a').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
    });
//our auto slider code
    (function autoSlider() {
     
        $('.slider .active').each(function () {
            if (!$(this).is(':last-child')) {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoSlider();
                });
            } else {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active');
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    autoSlider();
                });
            }
        
        });
     
    }());

//mixitup trigger
    $('#container').mixItUp();
    
//shuffle select func
    $('.shuffle li').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        
    });
    
//trigger nice scroll
    $('body').niceScroll({
        cursorcolor: '#1abc9c',
        cursorwidth: '10px',
        cursorborder: '1px solid #1abc9c',
        background: "rgba(20,20,20,0.3)",
        cursorborderradius: 0
        
    });
        
    
});



