$(document).ready(function(){
    $("#connectSubmit").on("click", function(){
        submitConnexion();
    });

    $("#regSubmit").on("click", function(){
        submitRegister();
    });
});

function submitConnexion(){
    $.ajax({
        url: '/phpscripts/connectuser.php',
        type: 'POST',
        data: $("#connectionForm").serialize(),
        success: function(output){
            var json_result = $.parseJSON(output);
            if(json_result.status.code == 200){
                console.log(json_result.status.message);
            } else if(json_result.status.code == 401){
                $("#connMessage").text(json_result.status.message);
            }
        }
    });
}

function submitRegister(){
    $.ajax({
        url: '/phpscripts/registeruser.php',
        type: 'POST',
        data: $("#registerForm").serialize(),
        success: function(output){
            var json_result = $.parseJSON(output);
            if(json_result.status.code == 409){
                $("#regMessage").text(json_result.status.message);
            } else if(json_result.status.code == 201){
                console.log(json_result.status.message);
            }
        }
    });
}
