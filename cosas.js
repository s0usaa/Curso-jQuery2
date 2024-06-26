let index = 1;
let state = "stop";

$(document).ready(function(){
    $(".small").click(function(){
        $("#"+index).removeClass("selected");
        let source = $(this).attr("src");
        $(".big").attr("src", source);

        index = parseInt($(this).attr("id"));
        $("#"+index).addClass("selected");
    });

    $("#backward").click(function(){
        goBack();
    })

    $("#forward").click(function(){
        goNext();
    })

    $(document).keydown(function(e){
        if(e.key == "ArrowLeft"){
            goBack();
        }else if(e.key == "ArrowRight"){
            goNext();
        }
    })

    $("#play").click(function(){
        if(state == "stop"){
            state = "run";
            $("#play").text("#");
            interval = setInterval(goNext, 5000);
        }else{
            state = "stop";
            $("#play").text(">");
            clearInterval(interval);
        }
    })
});


function goBack(){
    $("#"+index).removeClass("selected");

    if(index == 1){
        index = 5;
    }else{
        index = index -1
    }
    
    let source = $("#"+index).attr("src");
    $(".big").attr("src", source);
    $("#"+index).addClass("selected");
}

function goNext(){
    $("#"+index).removeClass("selected");

    if(index == 5){
        index = 1;
    }else{
        index = index + 1
    }

    let source = $("#"+index).attr("src");
    $(".big").attr("src", source);
    $("#"+index).addClass("selected");
}
