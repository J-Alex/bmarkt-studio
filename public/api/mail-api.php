<?php
	$objDatos = json_decode(file_get_contents("php://input"));

	$name = @trim(stripslashes($objDatos->name));
	$email = @trim(stripslashes($objDatos->email));
	$phone = @trim(stripslashes($objDatos->phone));
	$message = @trim(stripslashes($objDatos->msj));

$to = "brjosue73@gmail.com";
 $subject = "Test mail";
 $message = "My message";
 $from = "webp@gmail.com";
 $headers = "From:" . $from;
 mail($to,$subject,$message,$headers);
?>
