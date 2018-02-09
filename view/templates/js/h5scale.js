$(function(){
    $('#box')[0].style.webkitTransform ="scale("+$(window).width()/320+")";
    $('#box').height($(window).height()/($(window).width()/320));
    $(window).resize(function(){
        $('#box')[0].style.webkitTransform ="scale("+$(window).width()/320+")";
        $('#box').height($(window).height()/($(window).width()/320));
    });
})