  $(document).ready(function(){

    $('#contador').click(function(){
        let funcion = $('#contador').val();

        if(funcion === 'Ver nº enlaces'){
            let enlaces = $('a');

            $('#mostrar').val(enlaces.length);
            $('#contador').val('Ver nº parrafos')
        }else{
            let parrafos = $('p');
            $('#mostrar').val(parrafos.length);
            $('#contador').val('Ver nº enlaces');
        }
    })
  })