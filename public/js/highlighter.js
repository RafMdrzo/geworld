$( document ).ready(function()
{
    AOS.init();
    
    $('.navbtn').hover(function(){
        $(this).css('color', 'white');
        $(this).css('background-color', '#D8DBE2');
        $(this).css('height', '100%');
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
        $(this).css('background-color', '#72B49D');
        $(this).css('border-radius', '0vh');
    });

    $('.highlighter2').hover(function(){
        $(this).css('color', 'white');
        $(this).css('background-color', 'black');
        $(this).css('border-radius', '0');
    }, function(){
        $(this).css('color', 'white');
        $(this).css('background-color', '#C9BDA4');
        $(this).css('border-radius', '0vh');
    });

    $('.highlighter3').hover(function(){
        $(this).css('color', 'white');
        $(this).css('background-color', 'black');
        $(this).css('border-radius', '0');
    }, function(){
        $(this).css('color', 'white');
        $(this).css('background-color', '#725544');
        $(this).css('border-radius', '0vh');
    });
});
