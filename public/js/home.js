$( document ).ready(function()
{
    
    
    $(".hidden").hide().fadeIn(1500);

    $("#acts").click(function()
    {
        window.location.href = "/activities";
    });
    var typed = new Typed('#pls', {
        strings:["Hi! Welcome to GEWORLD-G1's creative output.", "This is in partial fulfilment for our course."],
        backSpeed: 55,
        typeSpeed: 55
    });

});
