<?php 
require_once __DIR__ . '/vendor/autoload.php';  // Corrected the path with forward slashes
// Load environment variables from the .env file in the root folder
Dotenv\Dotenv::createImmutable(__DIR__)->load();

function connect(){
    // Get environment variables
    $db_host = $_ENV["DATABASE_HOST"];
    $db_port = $_ENV["DATABASE_PORT"];
    $db_name = $_ENV["DATABASE_NAME"];
    $username = $_ENV["DATABASE_USERNAME"];
    $password = $_ENV["DATABASE_PASSWORD"];
    // Construct the DSN (Data Source Name) for PDO
    $dsn = "mysql:host=$db_host;dbname=$db_name;port=$db_port";
    // Instantiate connection to the database
    try {
        $conn = new PDO($dsn, $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $conn;
    }catch(PDOException $pe){
        die("Could not connect to the database: " . $pe->getMessage());
    }
}