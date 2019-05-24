<?php
    require("connectBD.php");
    $login = $_POST['IdConnexion'];
    $password = $_POST['mdp'];

    $sql = "SELECT * FROM utilisateur WHERE IdConnexion = '$login' AND mdp = '".md5($password)."'";
    $result = mysqli_query($connection, $sql);
    if(mysqli_num_rows($result) > 0){
        // connection ok
        $array_result['status']['code'] = 200;
        $array_result['status']['message'] = "Connecté en tant que '$login'";

        // session
        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
        session_start();
        $_SESSION['IdConnexion'] = $login;
        $_SESSION['nomEntreprise'] = $row['nomentreprise'];
        $_SESSION['adresse'] = $row['adresse'];
        $_SESSION['telephone'] = $row['telephone'];
        $_SESSION['codepostal'] = $row['codepostale'];
        $_SESSION['ville'] = $row['ville'];
        $_SESSION['type'] = $row['type'];
    } else {
        $array_result['status']['code'] = 401;
        $array_result['status']['message'] = "Identifiant ou mot de passe incorrect";
    }

    $json_result = json_encode($array_result);

    echo $json_result;

 ?>
