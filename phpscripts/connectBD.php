<?php
    $host = "localhost";
    $username = "user1";
    $passwd = "user1";
    $dbname = "plsql";

    $connection = mysqli_connect($host, $username, $passwd, $dbname);

    if(!$connection){
        die("Connection failed : ".mysqli_connect_error());
    }
 ?>
