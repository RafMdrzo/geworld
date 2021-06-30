$( document ).ready(function()
{
    AOS.init();
    
    $('.navbtn').hover(function(){
        $(this).css('color', 'white');
        $(this).css('background-color', '#D8DBE2');
        $(this).css('border-radius', '1vh');
    }, function(){
        $(this).css('color', 'black');
        $(this).css('background-color', 'white');
        $(this).css('border-radius', '0vh');
    });

    $('.highlighter1').hover(function(){
        $(this).css('color', 'white');
        $(this).css('background-color', 'black');
        $(this).css('border-radius', '0');
    }, function(){
        $(this).css('color', 'white');
        $(this).css('background-color', '#73D2DE');
        $(this).css('border-radius', '0vh');
    });

    $('.highlighter2').hover(function(){
        $(this).css('color', 'white');
        $(this).css('background-color', 'black');
        $(this).css('border-radius', '0');
    }, function(){
        $(this).css('color', 'white');
        $(this).css('background-color', '#BD75BA');
        $(this).css('border-radius', '0vh');
    });

    $('.highlighter3').hover(function(){
        $(this).css('color', 'white');
        $(this).css('background-color', 'black');
        $(this).css('border-radius', '0');
    }, function(){
        $(this).css('color', 'white');
        $(this).css('background-color', '#3066BE');
        $(this).css('border-radius', '0vh');
    });
});
