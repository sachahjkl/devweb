var mymap;
//parametres par défaut de la carte
const X = 48.864716;
const Y = 2.349014;
const zoom = 12
const token = "pk.eyJ1Ijoic2FjaGFmcm9tZW50IiwiYSI6ImNqcDczaTlvcDBhcHEzcG14b3RlY3JjYjUifQ.lqDhfMfAZTdS6HztmANh2A";

//parametres par défaut de l'api toilettes
const defAmount = 100;
const defDistance = 3000;
const defLang = "fr";
var markerGPS;

$(document).ready(function () {
    initMap(X, Y, zoom)
    assignOn();
    defaultValues();
    console.log("ready")
});

function initMap(xInit, yInit, zoom) {
    mymap = L.map('mapid').setView([xInit, yInit], zoom);
    L.tileLayer(`https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}`, {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        zoomSnap : 0,
        zoomDelta : 1,
        id: 'mapbox.streets',
        accessToken: token
    }).addTo(mymap);
    toilets = L.layerGroup().addTo(mymap);
    console.log("initMap")
}

function loadArrondissements() {
    var selectArrond = $("#arrond");
    selectArrond.append("<option value=0 selected >Aucun</option>");
    selectArrond.append(`<option value=1>1er</option>`);
    for (var i = 2; i <= 20; ++i) {
        selectArrond.append(`<option value=${i}>${i}ème</option>`);
    }
}

function onDrop(event, ui) {
    var elMarker = ui.draggable.data("marker");
    console.log(elMarker.getLatLng());
    mymap.setView(elMarker.getLatLng(), 18);
}

function defaultValues() {
    $("#rows").val(defAmount);
    $("#dist").val(defDistance);
    $("#results").html("<p class='mx-2'>Pas encore de résultat.<p>")
    $("#dist-value").text($("#dist").val() + " mètres")
    $("#switchOptions").prop("checked", false);
    $("#check-rows").prop("checked", true);
    $("#check-arrond").prop("checked", true);
    $("#check-dist").prop("checked", true);
    switchOptions();
    loadArrondissements();

}

function switchOptions() {
    state = !$("#switchOptions").prop("checked");
    var options = $("#options input, #options select");
    console.log(options);
    for (var i = 0; i < options.length; ++i) {
        if (!$('#' + options[i].id).data("superDisabled"))
            $('#' + options[i].id).prop("disabled", state);
        console.log(options[i].id);
    }
    console.log("options disabled: " + state)
}

function able() {
    var id = this.id.split("-")[1];
    $("#" + id).prop("disabled", !$("#check-" + id).prop("checked"));
    $("#" + id).data("superDisabled", !$("#check-" + id).prop("checked"));
}

function assignOn() {
    $('#addGPS').on('click', centerAtGPS);
    $('#removeGPS').on('click', removeGPS);
    $('#ResZoom').on('click', function () {
        mymap.setZoom(zoom);
    });
    $("#fetchToilets").on("click", getToilets);
    $("#dist").on('change', function () {
        $("#dist-value").text($("#dist").val() + " mètres")
    });
    $("#switchOptions").on("change", switchOptions);
    $("#check-rows").on("change", able);
    $("#check-arrond").on("change", able);
    $("#check-dist").on("change", able);
}

function centerAtGPS() {
    if (navigator.geolocation) {
        removeGPS();
        navigator.geolocation.getCurrentPosition(updateViewGPS);
    }
}

function removeGPS() {
    if (markerGPS != null) {
        mymap.removeLayer(markerGPS);
        markerGPS = null;
        mymap.setZoom(zoom)
    }
}

function updateViewGPS(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    markerGPS = L.marker([lat, long], {
        riseOnHover: true
    });
    markerGPS.bindPopup("<b>C'est vous ! <i class='fas fa-user-ninja'></i></b>");
    markerGPS.addTo(mymap).openPopup();
    mymap.setView([lat, long], 14);
    console.log(`Map centered at x:${lat} & y: ${long}`);
}

function ajaxPays(url) {
    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        error: function (xhr, status, error) {
            alert("La recherche des toilettes à échouée. Veuillez réessayer ultérieurement : " + error);
        },
        success: displayToilets
    });
}