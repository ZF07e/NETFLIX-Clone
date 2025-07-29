<?php
    require_once('connection.php');
    print_r($_POST);

    $email = $_POST["email"];
    $password = $_POST["password"];

    $database = new Database();
    $mysqli = $database->getConnection();

    $insertAcc = "INSERT INTO accounts(email, pasword) VALUES (?,?)";

    $stmt = $mysqli->stmt_init();

    if(!$stmt->prepare($insertAcc)){
        die("SQL ERROR". $mysqli->error);
    }
    
    $stmt->bind_param("ss", $email, $password);
    $stmt->execute();
?>