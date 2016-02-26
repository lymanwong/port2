<?php

//Email send to
$to = "lymanwong@gmail.com";
//Contact Subject
$subject = "$subject";

$message = "$message";

$name = $_POST['name'];
$email = $_POST['sender_email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$header = "$email";

if($_POST){
  mail($to, $subject, $message, $header);
  $feedback = "Thanks for your email!";
}
//Check, if message sent to your email
//display message "We've received your email"


?>
