$(document).ready(function(){

    $('#centigrados').change(function(){
        let cent = $('#centigrados').val();
        let centNum = parseInt(cent);
        let faren = (centNum * 9/5) + 32;
        $('#farenheit').val(faren.toFixed(2));
    });

    $('#farenheit').change(function(){
        let faren = $('#farenheit').val();
        let farenNum = parseInt(faren);
        let cent = (farenNum - 32) * 5/9;

        $('#centigrados').val(cent.toFixed(2));
    })
});