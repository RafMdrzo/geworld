$( document ).ready(function()
{
    
    
   
    $("#create1").click(function()
    {
        window.location.href = "/create1";
    });
    try{
        var typed = new Typed('#pls', {
            strings:["Hi! Welcome to GEWORLD-G1's website.", "We'll be posting all of our group's output here. This is in partial fulfilment for our course.", "Head on over to creative outputs and we hope you enjoy!"],
            backSpeed: 65,
            typeSpeed: 55
        });
    } catch {
        console.log("");
    }
    try{
        var maintenance = new Typed('#undermain', {
            strings:["This page is under construction.", "It'll be up soon!"],
            backSpeed: 65,
            typeSpeed: 55
        });
    } catch {
        console.log("");
    }

    
    $('.navbtn').hover(function(){
        $(this).css('color', 'white');
        $(this).css('background-color', '#D8DBE2');
        $(this).css('border-radius', '1vh');
    }, function(){
        $(this).css('color', 'black');
        $(this).css('background-color', 'white');
        $(this).css('border-radius', '0vh');
    });
});
