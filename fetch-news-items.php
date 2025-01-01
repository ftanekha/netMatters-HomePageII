<?php
require 'connect.php';

function fetchNewsItems(){
    $conn = connect();
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
    $conn = null;

    return $newsItems;
}