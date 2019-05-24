<?php
    require("connectBD.php");

    $sql_pays = "SELECT IdPays, nomPays FROM pays";
    $result1 = mysqli_query($connection, $sql_pays);
    $array_result = [];
    $i = 0;
    while($row1 = mysqli_fetch_array($result1, MYSQLI_ASSOC)){
        $array_result['pays']['id'][$i] = $row1['IdPays'];
        $array_result['pays']['name'][$i] = $row1['nomPays'];
        $i++;
    }

    $sql_type = "SELECT * FROM typeutilisateur";
    $result2 = mysqli_query($connection, $sql_type);
    $j = 0;
    while($row2 = mysqli_fetch_array($result2, MYSQLI_ASSOC)){
        $array_result['typeuser']['id'] = $row2['IdTypeUtilisateur'];
        $array_result['typeuser']['name'] = $row2['Type'];
        $j++;
    }

    $json_result = json_encode($array_result);

    echo $json_result;
 ?>
