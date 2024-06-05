<?php
$mensaje = $_GET['mensaje']  ?? 'Mensaje por defecto';

// realizar alguna operacion con el parametro
$respuesta = "El servidor dice: '{$mensaje}'";


echo $respuesta;

?>



