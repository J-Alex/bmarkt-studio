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

$body = 'This is the message';

$mail->IsSMTP();
$mail->Host       = 'smtp.gmail.com';

$mail->SMTPSecure = 'tls';
$mail->Port       = 587;
$mail->SMTPDebug  = 1;
$mail->SMTPAuth   = true;

$mail->Username   = 'brjosue73@gmail.com';
$mail->Password   = 'braKar7393';

$mail->SetFrom('mbrjosue73@gmail.com', 'asdasd');
$mail->AddReplyTo('brjosue73@gmail.com','no-reply');
$mail->Subject    = 'subject';
$mail->MsgHTML($body);

$mail->AddAddress('brjosue73@gmail.com', 'title1');
$mail->AddAddress('brjosue73@gmail.com', 'title2'); /* ... */

if(!$mail->send()) {
		echo 'Message could not be sent.';
		echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
		echo 'Message has been sent';
}

?>
