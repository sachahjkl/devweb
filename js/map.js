var mymap;
const zoom = 12
const token = "pk.eyJ1Ijoic2FjaGFmcm9tZW50IiwiYSI6ImNqcDczaTlvcDBhcHEzcG14b3RlY3JjYjUifQ.lqDhfMfAZTdS6HztmANh2A";

//parametres par défaut de l'api toilettes
const defLang = "fr";

$(document).ready(function () {
    initMap();
    ajaxPays();
    console.log("ready");
});

function initMap() {
    mymap = L.map('preview').setView([48.864716, 2.349014], 3);
    L.tileLayer(`https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}`, {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        zoomSnap: 0,
        zoomDelta: 1,
        minZoom: 3,
        id: 'mapbox.streets',
        accessToken: token
    }).addTo(mymap);
    console.log("initMap")
}


function ajaxPays() {
    $.ajax({
        type: 'GET',
        url: '/phpscripts/retrievePays.php',
        dataType: 'json',
        error: function (xhr, status, error) {
            alert("La récupération des pays a échoué" + error);
        },
        success: displayPays
    });
}

function displayPays(data) {
    for (pays of data) {
        $("#select-pays>ul").append(`<li>${pays.nomPays} <button id="${pays.alphacode2}">afficher infos</button></li>`);
        $(`#${pays.alphacode2}`).data('paysInfos',pays).click({code: pays.alphacode2},displayInfos);
        console.log(pays.alphacode2);
    }
}

function displayInfos(params) {
    console.log(params.data.code);
    pays=$(`#${params.data.code}`).data("paysInfos");
    $("#infos-pays ul").html("");
    $("#infos-pays ul").append(`<li>${pays.nomPays}</li>`);
    $("#infos-pays ul").append(`<li>${pays.Description}</li>`);
    $("#infos-pays ul").append(`<li>${pays.capitale}</li>`);
    $("#infos-pays ul").append(`<li>${pays.nbHabitants}</li>`);
    $("#infos-pays ul").append("<li><img src='style/flags/4x3/"+pays.alphacode2.toLowerCase()+".svg'></li>");
}   