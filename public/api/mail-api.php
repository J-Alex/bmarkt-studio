<?php 
	$objDatos = json_decode(file_get_contents("php://input"));
	
	$name = @trim(stripslashes($objDatos->name));
	$email = @trim(stripslashes($objDatos->email));
	$phone = @trim(stripslashes($objDatos->phone));
	$message = @trim(stripslashes($objDatos->msj));

    $email_to = 'jalex.wd@gmail.com';    
    $asunto = "Desde: bmarkt.studio";

    $mensaje  = $message;
	$mensaje .= "\n\n-------------------------------------------";
	$mensaje .= "\nDe: ".$name;
	$mensaje .= "\nTel: ".$phone;
	$mensaje .= "\nE-mail: <".$email.">";
	$mensaje .= "\nEnviado desde: bmarkt.studio - contact api";

	if (@mail($email_to,$asunto,$mensaje,$cabeceras)) {
		echo $mensaje;//"Enviado!";		
	} else {
		echo $mensaje;//"NOT SENT D: !!";
	}
	

?>