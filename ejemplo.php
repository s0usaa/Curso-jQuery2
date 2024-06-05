<?php

$datos = array(

    'nombre' => 'Luis',
    'edad' => 34,
    'pais' => 'España'
);

header('Content-Type: application/json');

echo json_encode($datos);

?>



