<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Sanitize input
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $phone = htmlspecialchars($_POST["phone"]);
    $gender = htmlspecialchars($_POST["gender"]);
    $dept = htmlspecialchars($_POST["department"]);

    echo "
    <h3 style='color:#357abd;'>Registration Successful!</h3>
    <p><strong>Full Name:</strong> $name</p>
    <p><strong>Email:</strong> $email</p>
    <p><strong>Phone:</strong> $phone</p>
    <p><strong>Gender:</strong> $gender</p>
    <p><strong>Department:</strong> $dept</p>
    <p style='color:green; font-weight:bold;'>Thank you for registering!</p>
    ";
} else {
    echo "<p style='color:red;'>Invalid request.</p>";
}
?>
