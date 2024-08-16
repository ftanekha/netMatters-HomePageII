<?php

include 'loadenv.php';

function fetchNewsItems(){
    $host = $_ENV['MySQL_DB_HOST_NAME'];
    $dbname = $_ENV['MySQL_DB_NAME'];
    $username = $_ENV['MySQL_DB_USER_NAME'];
    $password = $_ENV['MySQL_DB_PASSWORD'];
    //instantiate connection to database
    try
    {
        $conn = new PDO(
            "mysql:host=$host;dbname=$dbname;", 
            $username, $password
        );
        // echo "Connected to $dbname at $host successfully." . "\n\n";
    } 
    catch(PDOException $pe) 
    {
        die("Could not connect to the database $dbname :" . $pe->getMessage());
    }
    //query database table
    $query = "SELECT * FROM news_items";
    $result = $conn->query($query);

    $newsItems = [];

    foreach($result as $row)
    {
        $newsItems[] = $row;
    }
    //terminate connection
    $db = null;
    // echo "Connection to database terminated" . "\n";

    return $newsItems;
}