/*
Javacsript til Amazing Philippines
Webdokumentar 2018
*/
    var audioGalleri = [
    "beach2.mp3"
] ; 

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



/**
 * scroll: test om element er synligt, og gør noget ved videoen ...
 **/

// varibale
var minVideo = document.getElementById("vid1"); // tag som indeholder videoen
var video = document.getElementById("endelige5"); // mp4 filen

// scoll
 window.addEventListener("scroll", function(){
    
    if (elFllVsbl ( minVideo )){ 
        if (!(minVideo.curentTime > 1)){
            console.log("TRUE, så start video her ...");
            video.play();
        }
    } else {
        console.log("FALSE, sæt video på pause her ...")
        // tjek selv hvordan man sætter videoen på pause ... ;-)
        video.pause();
    }
 }
)

function elFllVsbl(el){
    return ( el.getBoundingClientRect().top>=0 &&  el.getBoundingClientRect().bottom<window.innerHeight);
}