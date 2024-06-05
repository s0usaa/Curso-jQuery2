<?php
// obtener los datos del formulario
$nombre = $_POST['nombre'] ?? '';
$email = $_POST['email'] ?? '';
$mensaje = $_POST['mensaje'] ?? '';

// Realizar la operacion con los datos
$respuesta = "Formulario recibido! Nombre: {$nombre}, Email : {$email}, Mensaje: {$mensaje}";

echo $respuesta;
?>



