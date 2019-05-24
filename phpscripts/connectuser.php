<?php
    require("connectBD.php");
    $login = $_POST['loginConnect'];
    $password = $_POST['passwordConnect'];

    $sql = "SELECT login, password FROM users WHERE login = '$login' AND password = '$password'";
    $result = mysqli_query($connection, $sql);
    if(mysqli_num_rows($result) > 0){
        // connection ok
        $array_result['status']['code'] = 200;
        $array_result['status']['message'] = "Success";

        // session
        session_start();
        $_SESSION['login'] = $login;
    } else {
        $array_result['status']['code'] = 401;
        $array_result['status']['message'] = "Unauthorized : bad login and/or password ?";
    }

    $json_result = json_encode($array_result);

    echo $json_result;

 ?>
