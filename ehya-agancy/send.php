<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];

$title = "Новая заявка";
$body = "
  <h2>Новая заявка:</h2>
  <b>Name:</b> $name<br>
  <b>Phone:</b> $phone<br><br>
  <b>Message:</b><br>$message";
 
// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'vartur.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'artur.vlv@vartur.ru'; // Логин на почте
    $mail->Password   = 'H5xh!root7'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('artur.vlv@vartur.ru', 'Артур'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('artur.vlv@yandex.ru');


    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;


// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";}
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "The message was not sent. The reason for the error: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: thankyou.html');
