$(document).keypress(function(event){
    console.log(event.key);
    change();
})

function random(){
    var ran = Math.floor(Math.random()*4)+1;
    return ran
}

function change(){
    switch (random()) {
        case 1:
            $("#p").css("margin")
            break;

        case 2:
           $("#s").text("work");
        break;

        case 3:
            document.querySelectorAll("button")[2].textContent = "work";
        break;

        case 4:
            document.querySelectorAll("button")[3].textContent = "work";
        break;
        
        default:
            break;
    }
}
