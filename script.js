/*
Javacsript til Amazing Philippines
Webdokumentar 2018
*/
    var audioGalleri = [
    "beach.mp3"
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



 window.addEventListener("scroll", function(){
          
    var myVideo = document.getElementById("vid1"); // select audio
    var video = document.getElementById("endelige5");
    console.log( "Er div #video synlig? " + elFllVsbl( vid1 ) );
    
    if (elFllVsbl ( video )){ 
        if (!(myVideo.curentTime > 0)){
            myVideo.play(); // play audio
        }
    } else {
        //myVideo.pause();
        myVideo.currentTime = 0; // rewind the sound
    }
 }
)

function elFllVsbl(el){
    return ( el.getBoundingClientRect().top>=0 &&  el.getBoundingClientRect().bottom<window.innerHeight);
}