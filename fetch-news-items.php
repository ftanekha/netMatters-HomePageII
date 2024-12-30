<?php
function fetchNewsItems(){
    $host = getenv("DATABASE_HOST");
    $dbname = getenv("DATABASE_NAME");
    $username = getenv("DATABASE_USERNAME");
    $password = getenv("DATABASE_PASSWORD");
    $dbPort = getenv("DATABASE_PORT");
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