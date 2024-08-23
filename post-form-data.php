<?php

include 'loadenv.php';

#get form data
$host = $_ENV['DB_HOST_NAME'];
$dbname = $_ENV['DB_NAME'];
$username = $_ENV['DB_USER_NAME'];
$password = $_ENV['DB_PASSWORD'];
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
// $nameError = $companyError = $emailError = $telephoneError = $messageError = "";

if(isset($data['name'])){
    if($data !== null) 
    {
        #access the data and perform operations
        $name = $data['name'];
        $company = $data['company'];
        $email = $data['email'];
        $telephone = $data['telephone'];
        $message = $data['message'];
        $marketing = $data['marketing'];

        #DATA FORMATTING & VALIDATION
        if($_SERVER["REQUEST_METHOD"] === "POST") 
        {#format the data
            function format_form_data($form_input) 
            {
                $form_input = trim($form_input);
                $form_input = stripslashes($form_input);
                $form_input = htmlspecialchars($form_input);
                return $form_input;
            }
            # [1] check for empty fields/ missing form data
            # [2] ****VALIDATE*****data
            if(empty($name)) {
                $name = "";
                $nameError = "Your name is required";
            }elseif(!preg_match("/^[a-zA-Z-' ]*$/",$name)) {
                $nameError = "The name format is incorrect.";
            }else{
                $name = format_form_data($name);
            }
            if(empty($company)){
                #nullable
                $company = null;
            }elseif(!preg_match("/^[a-zA-Z-' ]*$/",$company)) {
                $companyError = "The company name format is incorrect.";
            }else{
                $company = format_form_data($company);
            }
            if(empty($email)){
                $email = "";
                $emailError = "Your email is required";
            }elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $emailError = "The email format is incorrect.";
            }else{
                $email = $email = format_form_data($email);
            }
            if(empty($telephone)){
                $telephone = "";
                $telephoneError = "Your telephone is required";
            }elseif(!preg_match("/^[0-9]{7,15}+$/", $telephone)){
                $telephoneError = "The telephone format is incorrect.";
            }else{
                $telephone = format_form_data($telephone);
            }
            if(empty($message)){
                $message = "";
                $messageError = "Your message is required";
            }else{
                $message = format_form_data($message);
            }
            if(empty($marketing)){ 
                $marketing = false; 
            }elseif(format_form_data($marketing) === "yes" or format_form_data($marketing) === "no"){
                $marketing = filter_var($marketing, FILTER_VALIDATE_BOOL);
            }else{
                $marketing = false;
            }
        }

        #query database table with new data
        $query = "INSERT INTO form_data (name, company,	email, telephone, message, marketing)
                    VALUES (\"$name\", \"$company\", \"$email\", \"$telephone\", \"$message\", \"$marketing\")";
        try
        {
            $result = $conn->query($query);
        }
        catch(Exception $e)
        {
            echo "Exception caught: $e";
        }
    } 
    else 
    {
        #JSON decoding failed
        http_response_code(400); #Bad Request
        echo "Invalid JSON data";
    }
}