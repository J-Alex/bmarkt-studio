<?php
require_once('class.phpmailer.php');


        //creamos una instancía de la clase phpmailer
        $mail = new PHPMailer();
				$email= 'brjosue73@gmail.com';
        $mail->IsHTML(true); // si es html o txt
        $mail->CharSet = 'UTF-8';
        $mail->IsSMTP();
        $mail->Host = "smtp.gmail.com";//smpt de nuestro correo
        $mail->SMTPAuth = true; //por si necesita auentificación
        $mail->Username = "brjosue73@gmail.com";
        $mail->Password = "pass del correo";
        $mail->From = "tu correo de nuevo";
        $mail->FromName = "Nombre a quién va dirigido";
        $mail->Subject = "El asunto del mensaje";
        $mail->AddAddress($email);//el email al que vá
        $body  = "Tu email $email<br><br>";--|\
        $body.=  "Tu password <br><br> ";-----|--> El cuerpo del mensaje
        $body.= " Bienvenido<br><br> ";-|/

        $mail->Body = $body;//cogemos el cuerpo completo

        //Usamos AltBody por si el el correo no admite formato html
        $Altbody  = "Tu email  $email<br><br>";----|\
        $Altbody  .=  "Tu password <br><br> ";-----|--> El cuerpo del mensaje
        $Altbody  .= " Bienvenido <br><br> ";-|/
        $mail->AltBody = $Altbody;
        //envíamos el email al usuario
        $mail->Send();

?>
