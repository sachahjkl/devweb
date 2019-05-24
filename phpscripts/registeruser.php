<?php
    require("connectBD.php");
    $login = $_POST['loginRegister'];
    $password = $_POST['passwordRegister'];
    $confPassword = $_POST['confpasswordRegister'];

    $sql = "SELECT login FROM users WHERE login = '$login'";
    $result = mysqli_query($connection, $sql);

    if(mysqli_num_rows($result) > 0){
        // User already registered
        $array_result['status']['code'] = 409;
        $array_result['status']['message'] = "Conflict : User already registered with this login";

    } else {
        // Registering user
        $sqlAdd = "INSERT INTO users(login, password) VALUES('$login', '$password')";

        if(mysqli_query($connection, $sqlAdd)){
            $array_result['status']['code'] = 201;
            $array_result['status']['message'] = "User successfully registered";
        } else {
            $array_result['status']['code'] = 500;
            $array_result['status']['message'] = "Unknown error";
        }
    }

    $json_result = json_encode($array_result);

    echo $json_result;

 ?>
