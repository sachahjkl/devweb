$(document).ready(function(){
    $("#connectSubmit").on("click", function(){
        submitConnexion();
    });
    $("#regSubmit").on("click", function(){
        submitRegister();
    });
    fillRegisterForm();

    // modals
    var modalConn = document.getElementById("modalConn");
    var openConn = document.getElementById("openConn");
    var closeConn = document.getElementsByClassName("closeConn")[0];
    var modalInsc = document.getElementById("modalInsc");
    var openInsc = document.getElementById("openInsc");
    var closeInsc = document.getElementsByClassName("closeInsc")[0];
    openConn.onclick = function() { modalConn.style.display = "block"; }
    closeConn.onclick = function() { modalConn.style.display = "none"; }
    openInsc.onclick = function() { modalInsc.style.display = "block"; }
    closeInsc.onclick = function() { modalInsc.style.display = "none"; }
    window.onclick = function(event) {
        if (event.target == modalConn) { modalConn.style.display = "none"; }
        if (event.target == modalInsc) { modalInsc.style.display = "none"; }
    }
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
