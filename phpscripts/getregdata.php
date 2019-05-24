<?php
    require("connectBD.php");

    $sql_pays = "SELECT * FROM ";
    $result1 = mysqli_query($connection, $sql_pays);

    $sql_type = "SELECT * FROM ";
    $result2 = mysqli_query($connection, $sql_type);

    $json_result = json_encode($array_result);

    echo $json_result;
 ?>
