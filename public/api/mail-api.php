<?php
	$objDatos = json_decode(file_get_contents("php://input"));

	$name = @trim(stripslashes($objDatos->name));
	$email = @trim(stripslashes($objDatos->email));
	$phone = @trim(stripslashes($objDatos->phone));
	$message = @trim(stripslashes($objDatos->msj));
/************************************************************/
require 'class.phpmailer.php';
$mail=new PHPMailer();
$mail->CharSet = 'UTF-8';

$body = 'Correo: '.$email.' <br> Mensaje:  '.$message;

$mail->IsSMTP();
$mail->Host       = 'smtp.gmail.com';

$mail->SMTPSecure = 'tls';
$mail->Port       = 587;
$mail->SMTPDebug  = 1;
$mail->SMTPAuth   = true;

$mail->Username   = 'bmarkt.studio@gmail.com';
$mail->Password   = 'bmarkt162216';

$mail->SetFrom($email, $name);
$mail->AddReplyTo('bmarkt.studio@gmail.com','no-reply');
$mail->Subject    = 'Contacto desde sitio web';
$mail->MsgHTML($body);


$mail->AddAddress('brjosue73@gmail.com', 'Brandon');
$mail->AddAddress('marvingutierrezjr@gmail.com', 'Marvin');
$mail->AddAddress('jenniercruz90@gmail.com', 'Jennier');
$mail->AddAddress('contacto@bmarkt.studio', 'Bmarkt');



if(!$mail->send()) {
		echo 'Message could not be sent.';
		echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
		echo 'Message has been sent';
}

?>
