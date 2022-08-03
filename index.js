/* $("button").html("<i>Next</i>");
$("a").attr("href", "https://github.com/Johnaits/JQuery/new/main");

$("h1").click(function()    {
    $("h1").text("hello!");
})

$(document).keypress(function(event){
    $("h1").text((event.key));
});

$(document).on("mouseover",function(){
    $("button").css("color","pink");
}) */

/* $("h1").on("click",function(){
    $("h1").before("<button>Good</button>");
}) */

$("button").on("dblclick",function(){
    $("h1").animate({opacity:0.5});
})


