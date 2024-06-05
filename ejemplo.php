<?php
// obtener el valor del parametro enviado por GET
$parametro = $_GET['parametro'] ?? '';

// realizar alguna operacion con el parametro

$mensaje = "La solicitud AJAX con parametro '{$parametro}' fue exitosa!";

echo $mensaje;

?>



