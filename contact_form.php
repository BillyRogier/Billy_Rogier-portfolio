<?php


use PHPMailer\PHPMailer\PHPMailer;

require './PHPMailer/vendor/autoload.php';

if (isset($_POST)) {
    $mail = new PHPMailer();
    $mail->isSMTP();
    $mail->SMTPDebug = 0;
    $mail->Host = "smtp.free.fr";
    $mail->Port = "465";
    $mail->SMTPAuth = true;
    $mail->CharSet = "UTF-8";
    $mail->Username = "billy.rogier@free.fr";
    $mail->Password = "Billy007";
    $mail->SMTPSecure = "ssl";
    $mail->setFrom($_REQUEST['email'], $_REQUEST['name']);
    $mail->addReplyTo($_REQUEST['email'], $_REQUEST['name']);
    $mail->addAddress("billy.rogier@free.fr", ("Billy Rogier"));
    $mail->Subject = 'Message envoyé via le site internet';
    $mail->msgHTML(file_get_contents('message.html'), __DIR__);
    $mail->Body =  $_REQUEST['message'];
    if (!$mail->send()) {
        echo 'error';
    } else {
        echo 'success';
    }
} else {
    header("location: 404");
    exit;
}
