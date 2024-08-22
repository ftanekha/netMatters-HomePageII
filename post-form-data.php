<?php

include 'loadenv.php';

function postFormData(){
    #get form data
    $host = $_ENV['MySQL_DB_HOST_NAME'];
    $dbname = $_ENV['MySQL_DB_NAME'];
    $username = $_ENV['MySQL_DB_USER_NAME'];
    $password = $_ENV['MySQL_DB_PASSWORD'];
    #instantiate connection to database
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
    
    $post = json_decode($_POST, true);

    $name = $post['name'];
    $company = $post['company'];
    $email = $post['email'];
    $telephone = $post['telephone'];
    $message = $post['message'];
    
    echo($name);
    #query database table with new data
    // $query = "INSERT INTO form_data (name, company,	email, telephone, message)
    //             VALUES (\"$name\", \"$company\", \"$email\", \"$telephone\", \"$message\")";
    // try
    // {
    //     $result = $conn->query($query);
    // }
    // catch(Exception $e)
    // {
    //     echo "Exception caught: $e";
    // }
}

postFormData();

// HTML