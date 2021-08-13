<?php
include_once "cors.php";
include_once "conexion.php";
$jsondata = file_get_contents('php://input');
$data = json_decode($jsondata, true);


$resultado = $mysqli->query("SELECT * FROM citas where dni='05464421N'");
$response = $resultado->fetch_all(MYSQLI_ASSOC);
$response = json_encode($response);
         echo $response;

?>