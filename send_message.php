<?php
// IMPORTANT: Host this on a PHP-capable server. For Gmail SMTP, enable 2‑Step Verification
// and use an App Password. Never commit your real account password.

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['message' => 'Method not allowed']);
    exit;
}

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');

if ($name === '' || $email === '' || $message === '') {
    http_response_code(400);
    echo json_encode(['message' => 'Please fill in all fields']);
    exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['message' => 'Please enter a valid email address']);
    exit;
}

// Load PHPMailer (composer). Run: composer require phpmailer/phpmailer
if (!file_exists(__DIR__ . '/vendor/autoload.php')) {
    http_response_code(500);
    echo json_encode(['message' => 'Mailer not installed. Run: composer require phpmailer/phpmailer']);
    exit;
}

require __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

// Prefer environment variables if set
$smtpUser = getenv('SMTP_USER') ?: 'shresthashreya306@gmail.com';
$smtpPass = getenv('SMTP_PASS') ?: 'Kokuyo#12'; // Replace with Gmail App Password
$toEmail  = 'shresthashreya306@gmail.com';

try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtpUser;
    $mail->Password   = $smtpPass; // Use App Password, not account password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // tls
    $mail->Port       = 587;

    $mail->setFrom($smtpUser, 'Portfolio Contact');
    $mail->addAddress($toEmail);
    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);
    $mail->Subject = 'Portfolio contact from ' . $name;
    $mail->Body    = nl2br("Name: {$name}\nEmail: {$email}\n\n{$message}");
    $mail->AltBody = "Name: {$name}\nEmail: {$email}\n\n{$message}";

    $mail->send();
    echo json_encode(['message' => 'Message sent successfully!']);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['message' => 'Mailer error: ' . $mail->ErrorInfo]);
}
