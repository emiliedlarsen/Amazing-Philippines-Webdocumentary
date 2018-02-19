/*
Javacsript til Amazing Philippines
Webdokumentar 2018
*/
var audioGalleri = [
    "beach2.mp3"
];

// Onscroll når der er video tag i vinduet

// Find alle video elementer
var allVids = document.getElementsByTagName("video");

/* 
    Loop igennem alle video elementer og sæt volumen
    til en startværdi på 50% (e.g. 0.5)
*/
for(var i = 0; allVids.length > i; i++) {
    allVids[i].volume = 0.5;
}


// scoll
 window.addEventListener("scroll", function(){
    var video; 
    for (var i = 0; allVids.length > i; i++) {
        video = allVids[i];
        if (isInViewPort(video)){
            video.play();
        } else {
            video.pause();
        }
    }
 });

function isInViewPort(el) {
    var rect = el.getBoundingClientRect(); //Tager bredde og højde af skærmen
    var html = document.documentElement;
    
    return (rect.top >= -100 && rect.bottom <= (window.innerHeight + 150 || html.clientHeight + 150));
//Den giver svar tilbage minus 100 for at få den til at starte lidt før 
}

visAudio(audioGalleri[0]);

function visAudio( audio ) {
    document.write(
        '<main>'
        + '<audio autoplay loop>'
        + '<source src="audio/'
        + audio
        + '" type="audio/mpeg">'
        + '</audio>'
        + '</main>'
    )
} 	

//Læs mere her knappen til cirklerne 
function on(id) {
    var knap = document.getElementById("knap" + id);
    document.getElementById("overlay" + id).style.display = "block";
    
    knap.style.zIndex = 1;
    knap.innerHTML = "Luk her";
    knap.setAttribute('onclick', 'off('+ id +')');
}

function off(id) {
    document.getElementById("overlay" + id).style.display = "none";
    var knap = document.getElementById("knap" + id);
    
    knap.style.zIndex = 2;
    knap.innerHTML = "Læs mere her";
    knap.setAttribute('onclick', 'on('+ id +')');
}



