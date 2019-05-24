<?php
    require("connectBD.php");
    $login = $_POST['loginConnect'];
    $password = $_POST['passwordConnect'];

    $sql = "SELECT * FROM utilisateur WHERE IdConnexion = '$login' AND mdp = '".md5($password)."'";
    $result = mysqli_query($connection, $sql);
    if(mysqli_num_rows($result) > 0){
        // connection ok
        $array_result['status']['code'] = 200;
        $array_result['status']['message'] = "Success";

        // session
        $row = mysqli_fetch_array($result, MYSQLI_FETCH_ASSOC);
        session_start();
        $_SESSION['IdConnexion'] = $login;
        $_SESSION['nomEntreprise'] = $row['nomEntreprise'];
        $_SESSION['adresse'] = $row['adresse'];
        $_SESSION['NTelephone'] = $row['NTelephone'];
    } else {
        $array_result['status']['code'] = 401;
        $array_result['status']['message'] = "Unauthorized : bad login and/or password ?";
    }

    $json_result = json_encode($array_result);

    echo $json_result;

 ?>
