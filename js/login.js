$(document).ready(function(){
    $("#connectSubmit").on("click", function(){
        submitConnexion();
    });

    $("#regSubmit").on("click", function(){
        submitRegister();
    });

    fillRegisterForm();
});

function fillRegisterForm(){
    $.ajax({
        url: '/phpscripts/getregdata.php',
        success: function(output){
            var json_result = $.parseJSON(output);
            var typeAppend = "", paysAppend = "";
            $.each(json_result.pays, function(key, value){
                paysAppend += "<option value='" + value.id + "'>"
                    + value.name + "</option>";
            });
            $("#registerForm [name='Pays']").html(paysAppend);
            $.each(json_result.typeuser, function(key, value){
                typeAppend += "<option value='" + value.id + "'>"
                    + value.name + "</option>";
            });
            $("#registerForm [name='Type']").html(typeAppend);
        }
    });
}

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
