function loadContent(filename){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        document.getElementById("selected-tab").innerHTML = this.responseText;
    }
    xhttp.open("GET", filename);
    xhttp.send();
}

$(function(){
    $("#home-tab").mouseenter(function(){
        $("#selected-tab").fadeOut();
        loadContent("home.html");
        $("#selected-tab").fadeIn();
    }); 

    $("#videos-tab").mouseenter(function(){
        $("#selected-tab").fadeOut();
        loadContent("videos.html");
        $("#selected-tab").fadeIn();
    });

    $("#channels-tab").mouseenter(function(){
        $("#selected-tab").fadeOut();
        loadContent("channels.html");
        $("#selected-tab").fadeIn();
    });

    $("#groups-tab").mouseenter(function(){
        $("#selected-tab").fadeOut();
        loadContent("groups.html");
        $("#selected-tab").fadeIn();
    });

    $("#menu").mouseleave(function(){
        $("#selected-tab").fadeOut();
    });

});