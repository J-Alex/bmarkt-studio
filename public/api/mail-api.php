<?php
// Varios destinatarios
$para  = 'brjosue73@gmail.com' . ', '; // atención a la coma
$para .= 'wez@example.com';

// título
$título = 'Recordatorio de cumpleaños para Agosto';

// mensaje
$mensaje = '
<html>
<head>
  <title>Recordatorio de cumpleaños para Agosto</title>
</head>
<body>
  <p>¡Estos son los cumpleaños para Agosto!</p>
  <table>
    <tr>
      <th>Quien</th><th>Día</th><th>Mes</th><th>Año</th>
    </tr>
    <tr>
      <td>Joe</td><td>3</td><td>Agosto</td><td>1970</td>
    </tr>
    <tr>
      <td>Sally</td><td>17</td><td>Agosto</td><td>1973</td>
    </tr>
  </table>
</body>
</html>
';

// Para enviar un correo HTML, debe establecerse la cabecera Content-type
$cabeceras  = 'MIME-Version: 1.0' . "\r\n";
$cabeceras .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// Cabeceras adicionales
$cabeceras .= 'To: Mary <mary@example.com>, Kelly <kelly@example.com>' . "\r\n";
$cabeceras .= 'From: Recordatorio <cumples@example.com>' . "\r\n";
$cabeceras .= 'Cc: birthdayarchive@example.com' . "\r\n";
$cabeceras .= 'Bcc: birthdaycheck@example.com' . "\r\n";

// Enviarlo
mail($para, $título, $mensaje, $cabeceras);









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

	//try {
		if (@mail($email_to,$asunto,$mensaje,$cabeceras)) {
			echo  "Enviado!";
		} else {
			echo  "No Sent D:!!";
		}
	//} catch (Exception $e) {
  	//	echo 'Message: ' .$e->getMessage();
	//}
	/*if (@mail($email_to,$asunto,$mensaje,$cabeceras)) {
		echo  "Enviado!";
	} else {
		echo "NOT SENT D: !!";
	}*/


?>
