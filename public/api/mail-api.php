<?php

$mail = "Prueba de mensaje";
//Titulo
$titulo = "PRUEBA DE TITULO";
//cabecera
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
//dirección del remitente
$headers .= "From: Geeky Theory < tu_dirección_email >\r\n";
//Enviamos el mensaje a tu_dirección_email
$bool = mail("tu_dirección_email",$titulo,$mail,$headers);
if($bool){
    echo "Mensaje enviado";
}else{
    echo "Mensaje no enviado";
}









	// $objDatos = json_decode(file_get_contents("php://input"));
	//
	// $name = @trim(stripslashes($objDatos->name));
	// $email = @trim(stripslashes($objDatos->email));
	// $phone = @trim(stripslashes($objDatos->phone));
	// $message = @trim(stripslashes($objDatos->msj));
	//
  //   $email_to = 'jalex.wd@gmail.com';
  //   $asunto = "Desde: bmarkt.studio";
	//
  //   $mensaje  = $message;
	// $mensaje .= "\n\n-------------------------------------------";
	// $mensaje .= "\nDe: ".$name;
	// $mensaje .= "\nTel: ".$phone;
	// $mensaje .= "\nE-mail: <".$email.">";
	// $mensaje .= "\nEnviado desde: bmarkt.studio - contact api";
	//
	// //try {
	// 	if (@mail($email_to,$asunto,$mensaje,$cabeceras)) {
	// 		echo  "Enviado!";
	// 	} else {
	// 		echo  "No Sent D:!!";
	// 	}
	//} catch (Exception $e) {
  	//	echo 'Message: ' .$e->getMessage();
	//}
	/*if (@mail($email_to,$asunto,$mensaje,$cabeceras)) {
		echo  "Enviado!";
	} else {
		echo "NOT SENT D: !!";
	}*/


?>
