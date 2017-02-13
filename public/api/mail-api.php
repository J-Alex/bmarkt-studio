<?php
require_once('class.phpmailer.php');

class Users {

    private $dbh;

    public function __construct() {
        //creamos una instancia del php document object y la conexion con la base de datos
        $this->dbh = new PDO("mysql:host=servidor;dbname=basededatos", "usuario", "password");
    }

    private function set_names() {
        return $this->dbh->query("SET NAMES 'utf8'");
    }

    //FUNCION PARA REGISTRAR USUARIOS CODIFICANDO EL PASSWORD
    public function registroUsuarios($nombre,$email,$password) {
        self::set_names();
		$passCodificado =  hash('sha256',$password);
		$sql = $this->dbh->prepare("INSERT INTO usuarios VALUES (null, ?, ?, ?);");

		$sql ->bindParam(1,$nombre);
        $sql ->bindParam(2, $passCodificado);
		$sql ->bindParam(3,$email);
		$sql ->execute();

        //creamos una instancía de la clase phpmailer
        $mail = new PHPMailer();

        $mail->IsHTML(true); // si es html o txt
        $mail->CharSet = 'UTF-8';
        $mail->IsSMTP();
        $mail->Host = "smtp.gmail.com";//smpt de nuestro correo
        $mail->SMTPAuth = true; //por si necesita auentificación
        $mail->Username = "tu correo";
        $mail->Password = "pass del correo";
        $mail->From = "tu correo de nuevo";
        $mail->FromName = "Nombre a quién va dirigido";
        $mail->Subject = "El asunto del mensaje";
        $mail->AddAddress($email);//el email al que vá
        $body  = "Tu email $email<br><br>";--|\
        $body.=  "Tu password $password<br><br> ";-----|--> El cuerpo del mensaje
        $body.= " Bienvenido<br><br> ";-|/

        $mail->Body = $body;//cogemos el cuerpo completo

        //Usamos AltBody por si el el correo no admite formato html
        $Altbody  = "Tu email  $email<br><br>";----|\
        $Altbody  .=  "Tu password $password<br><br> ";-----|--> El cuerpo del mensaje
        $Altbody  .= " Bienvenido <br><br> ";-|/
        $mail->AltBody = $Altbody;

        $mail->AddAttachment("archivos/nombrearchivo.extension");*//si queremos envíar archivos

        //envíamos el email al usuario
        $mail->Send();
        header("Location:redirigimos donde queramos");
    }
}

?>
