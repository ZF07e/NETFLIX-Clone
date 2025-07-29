<?php

class Database{
    private $hostname = "localhost";
    private $username = "root";
    private $password = "";
    private $dbName = "freenetflixaccounts";

    protected $conn;
    
    public function __construct(){
        $this->conn =  new mysqli($this->hostname, $this->username, $this->password, $this->dbName);

        if($this->conn->connect_errno){
            die("Connection Failed" .$this->conn->connect_error);
        }
    }

    public function getConnection(){
        return $this->conn;
    }
}   
?>