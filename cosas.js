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

    $('#parrafos').click(function(){
        let funcion = $('#parrafos').val();
        let nuevoParrafo = '<p>Nuevo Parrafo</p>';

        if(funcion === 'Añadir parrafo'){
            $('#contenido').append(nuevoParrafo);
            $('#parrafos').val('Eliminar parrafo');
        }else{
            let parrafos = $('p');
            let parrafo = parrafos[parrafos.length - 1];
            parrafo.remove();
            $('#parrafos').val('Añadir parrafo');
        }

    })
  })