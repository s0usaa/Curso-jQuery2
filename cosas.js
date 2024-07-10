
$(document).ready(function(){
    $(".filters button").on("click", function(){
        let filtroValor = $(this).attr("data-filter");

        if(filtroValor === 'all'){
            $(".image").show();
        }else{
            $(".image").hide();
            $('.image[data-category="'+filtroValor +'"]').show();
        }
    })
})