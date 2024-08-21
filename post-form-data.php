<?php

include 'loadenv.php';

function postFormData(){
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
    } 
    catch(PDOException $pe) 
    {
        die("Could not connect to the database $dbname :" . $pe->getMessage());
    }
    
    $name = $_POST['name'];
    $company = $_POST['company'];
    $email = $_POST['email'];
    $telephone = $_POST['telephone'];
    $message = $_POST['message'];
    //query database table with new data
    $query = "INSERT INTO form_data (name, company,	email, telephone, message)
                VALUES ($name, $company, $email, $telephone, $message)";


    try
    {
        $result = $conn->query($query);
    }
    catch(Exception $e)
    {
        echo "Exception caught: $e";
    }
}

postFormData();