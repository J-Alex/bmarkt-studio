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
	try{
		if (@mail($email_to,$asunto,$mensaje,$cabeceras)) {
			echo  "Enviado!";			
		}
	} catch (Exception $e) {
  		echo 'Message: ' .$e->getMessage();
	}
	/*if (@mail($email_to,$asunto,$mensaje,$cabeceras)) {
		echo  "Enviado!";		
	} else {
		echo "NOT SENT D: !!";
	}*/
	

?>