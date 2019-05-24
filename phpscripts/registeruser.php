<?php
    require("connectBD.php");
    $login = $_POST['IdConnexion'];
    $password = $_POST['mdp'];
    $confPassword = $_POST['mdpconf'];
    $company_name = $_POST['nomEntreprise'];
    $company_type = $_POST['Type'];
    $adress = $_POST['adresse'];
    $codepost = $_POST['CodePostal'];
    $city = $_POST['Ville'];
    $country = $_POST['Pays'];
    $phone = $_POST['telephone'];

    $sql = "SELECT IdConnexion FROM utilisateur WHERE IdConnexion = '$login'";
    $result = mysqli_query($connection, $sql);

    if(mysqli_num_rows($result) > 0){
        // User already registered
        $array_result['status']['code'] = 409;
        $array_result['status']['message'] = "Un utilisateur est déjà enregistré avec cet identifiant";
    } else {
        // Registering user
        $sqlAdd = "INSERT INTO utilisateur(Type, IdConnexion, mdp, nomEntreprise, adresse, codepostale, ville, pays, telephone)
            VALUES('$company_type', '$login', MD5('$password'), '$company_name', '$adress', '$codepost', '$city', '$country', '$phone')";

        if(mysqli_query($connection, $sqlAdd)){
            $array_result['status']['code'] = 201;
            $array_result['status']['message'] = "Inscription effectuée, vous pouvez vous connecter";
        } else {
            $array_result['status']['code'] = 500;
            $array_result['status']['message'] = "Erreur lors de l'inscription";
        }
    }

    $json_result = json_encode($array_result);

    echo mysqli_error($connection);

    echo $json_result;

 ?>
