<?php
    require("connectBD.php");

    $sql_pays = "SELECT *FROM pays";
    $result1 = mysqli_query($connection, $sql_pays);
    $i = 0;
    while($row1 = mysqli_fetch_array($result1, MYSQLI_ASSOC)){
        $array_result[] = $row1;
    }

    $json_result = json_encode($array_result);

    echo $json_result;
 ?>
