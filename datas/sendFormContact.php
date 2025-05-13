<?php
$nom = htmlspecialchars(strip_tags($_POST['nom']));
$telephone = htmlspecialchars(strip_tags($_POST['telephone']));
$mail = htmlspecialchars(strip_tags($_POST['mail']));
$message = htmlspecialchars(strip_tags($_POST['message']));

// Validate email
if (!filter_var($mail, FILTER_VALIDATE_EMAIL)) {
  echo "<p class=\"hardLight\">Invalid email address.</p>";
  exit;
}

// Build message
$texte = "Hi there,<br /><br />";
$texte .= "Message from &lt;South Side Nirvana&gt;.<br />";
$texte .= "The elements entered in the form are as follows:<br />";
$texte .= "Name: $nom<br />";
$texte .= "Phone number: $telephone<br />";
$texte .= "Email: $mail<br /><br />";
$texte .= "Message: $message<br /><br />";
$texte .= "This is an automatic message, do not reply to it.";

$texte = stripslashes($texte);

// Email details
$destinataire = "cheran6272cherry@gmail.com";
$objet = "Message from your South Side Nirvana website";

// Email headers
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: South Side Nirvana <form@yourbandname.com>" . "\r\n";

// Send email
if ($checkRobot == 7) {
    $sending_ok = mail($destinataire, $objet, $texte, $headers);
    if ($sending_ok) {
        echo "<p class=\"hardLight\">Thanks for your message!<br /><br />We will get back to you very soon.</p>";
    } else {
        echo "<p class=\"hardLight\">There seems to be a problem sending the message...</p>";
    }
} else {
    echo "<p class=\"hardLight\">There seems to be a problem with the anti-robot control...</p>";
}
?>