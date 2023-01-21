<?php

if (isset($_POST)) {
    $name = $_REQUEST['name'];
    $email = $_REQUEST['email'];
    $message = $_REQUEST['message'];

    $to = 'billy.rogier@free.fr';
    $subject = 'Contact Request From Website';
    $headers = "From: " . $name . " <" . $email . "> \r\n";
    $send_email = mail($to, $subject, $message, $headers);

    echo ($send_email) ? 'success' : 'error';
} else {
    header("location: 404");
    exit;
}