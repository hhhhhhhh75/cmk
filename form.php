<?php
// Get data from form  
$firstName = $_POST['fname'];
$lastName = $_POST['lname'];
$address = $_POST['address'];
$phoneNumber = $_POST['phone'];
$email= $_POST['email'];
$message= $_POST['about'];
$gender = $_POST['gender'];
$purpose = $_POST['purpose'];
$ready = $_POST['ready'];
$adopt = $_POST['adopt'];
$exp = $_POST['experience'];
 
$to = "carterisapool@gmail.com";
$subject = "Adoption Form";
 
// The following text will be sent
// Name = user entered name
// Email = user entered email
// Message = user entered message 
$txt ="First Name: " . $firstName . "\r\n Last Name: "
    . $lastName . "\r\n Address: " . $address . "\r\n Phone Number: " . $phoneNumber 
	. "\r\n Email: " . $email . "\r\n About: " . $message . "\r\n Gender of Choice: " . $gender 
	. "\r\n What is the dog used for: " . $purpose . "\r\n Experience with Dog: " . $exp . 
	"\r\n When would you be ready for a puppy? " . $ready . "\r\n Are you open to rescue, foster or adopt an adult Bernese Mountain Dog? " . $adopt;
 
$headers = "From: noreply@demosite.com" . "\r\n" .
            "CC: somebodyelse@example.com";
if($email != NULL) {
    mail($to, $subject, $txt, $headers);
}
 
// Redirect to
header("Location:thanks.html");
?>