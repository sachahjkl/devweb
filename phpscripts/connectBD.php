<?php
    $host = "localhost";
    $username = "user1";
    $passwd = "user1";
    $dbname = "EquipeParis1";

    $connection = mysqli_connect($host, $username, $passwd, $dbname);

    if(!$connection){
        die("Connection failed : ".mysqli_connect_error());
    }

    mysqli_set_charset($connection, "utf8");
 ?>
