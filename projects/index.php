<h1> MySQL - Check Connection</h1>

<?php
// 1. Credentials
$hostname = 'localhost';
$dbname = 'schooldb';
$username = 'root';
$password = "root";

try {
    // 2. Connect (This locks us into 'scholldb')
    $db = new mysqli($hostname, $username, $password, $dbname);

    if ($db->connect_error){
        die("Connection Failed: " . $db->connect_error);
    }
    
    // 3. Connection Success Message
    echo "<h2>Secure connection to the database '" . $dbname . "' established successfully!</h2>";
    
    $db->close();

} catch(Exception $e){
    $error_message = $e->getMessage();
    echo "<p> Error Message: $error_message</p>\n";
}
?>