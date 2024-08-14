<?php

include 'loadenv.php';

$host = $_ENV['MySQL_DB_HOST_NAME'];
$dbname = $_ENV['MySQL_DB_NAME'];
$username = $_ENV['MySQL_DB_USER_NAME'];
$password = $_ENV['MySQL_DB_PASSWORD'];

try{
    $conn = new PDO(
        "mysql:host=$host;dbname=$dbname;", 
        $username, $password
    );
    echo "Connected to $dbname at $host successfully.";
}catch(PDOException $pe) {
    die ("Could not connect to the database $dbname :" . $pe->getMessage());
}