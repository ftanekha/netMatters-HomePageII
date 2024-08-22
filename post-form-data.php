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
    
    #retrieve the raw POST data
    $jsonData = file_get_contents('php://input');
    #decode the JSON data into a PHP associative array
    $data = json_decode($jsonData, true);
    #check if decoding was successful
    if ($data !== null) {
        #access the data and perform operations
        $name = $data['name'];
        $company = $data['company'];
        $email = $data['email'];
        $telephone = $data['telephone'];
        $message = $data['message'];
        #query database table with new data
        $query = "INSERT INTO form_data (name, company,	email, telephone, message)
                    VALUES (\"$name\", \"$company\", \"$email\", \"$telephone\", \"$message\")";
        try
        {
            $result = $conn->query($query);
        }
        catch(Exception $e)
        {
            echo "Exception caught: $e";
        }
    } else {
        //JSON decoding failed
        http_response_code(400); // Bad Request
        echo "Invalid JSON data";
    }
    
}

postFormData();

// HTML