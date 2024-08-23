<?php

include 'loadenv.php';

function fetchNewsItems(){
    $host = $_ENV['DB_HOST_NAME'];
    $dbname = $_ENV['DB_NAME'];
    $username = $_ENV['DB_USER_NAME'];
    $password = $_ENV['DB_PASSWORD'];
    //instantiate connection to database
    try
    {
        $conn = new PDO(
            "mysql:host=$host;dbname=$dbname;", 
            $username, $password
        );
    } 
    catch(PDOException $pe) 
    {
        die("Could not connect to the database $dbname :" . $pe->getMessage());
    }
    //query database table
    $query = "SELECT * FROM news_items";
    $result = $conn->query($query);
    //gather results in array
    $newsItems = [];
    foreach($result as $row)
    {
        $newsItems[] = $row;
    }
    //format date as dd [th/st/rd] / month / yyyy
    foreach($newsItems as $newsItem)
    {
        $newsItem["date"] = date('d-F-Y', strtotime($newsItem["date"]));
    }
    //terminate connection
    $db = null;

    return $newsItems;
}