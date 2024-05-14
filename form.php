<?php
// Get data from form  
$firstName = $_POST['fname'];
$lastName = $_POST['lname'];
$address = $_POST['address'];
$phoneNumber = $_POST['phone'];
$email= $_POST['email'];
$message= $_POST['about'];
 
$to = "carterpool@gmail.com";
$subject = "Adoption Form";
 
// The following text will be sent
// Name = user entered name
// Email = user entered email
// Message = user entered message 
$txt ="First Name: " . $firstName . "\r\n Last Name: "
    . $lastName . "\r\n Address: " . $address . "\r\n Phone Number: " . $phoneNumber 
	. "\r\n Email: " . $email . "\r\n About: " . $message;
 
$headers = "From: noreply@demosite.com" . "\r\n" .
            "CC: somebodyelse@example.com";
if($email != NULL) {
    mail($to, $subject, $txt, $headers);
}
 
// Redirect to
header("Location:last.html");
?>