// Billedegalleri med alle billedgallerier 
var galleri = [
    "foto3.jpg",
    "foto8.png",
    "foto5.jpg",
    "foto2.jpg",
    "foto9.jpg",
    "foto4.jpg",
    "foto1.jpg",
    "foto12.jpg",
    "foto6.jpg",
    "foto11.jpg", 
    "foto7.jpg",
    "foto13.jpg", 
    "foto10.jpg",  
    "foto.jpg"
];

// Videogalleri med alle video filerne 
var videoGalleri = [
    "endelige1.mp4",
    "working3.mp4", 
    "endelige2.mp4",
    "endelige3.mp4", 
    "paddleboard.mp4", 
    "endelige4.mp4", 
    "singing.mp4",
    "endelige5.mp4",
    "SUP.mp4",
    "endelige6.mp4"
];

for (var i = 0; i<galleri.length; i++) {
//    console.log(galleri[i]);
    if(i == 2) {
        visVideo(videoGalleri[0]);        
    } if(i == 3) {
        visVideo(videoGalleri[1]);
    } if(i == 3) {
        visVideo(videoGalleri[2]);
    } else if(i == 4) {
        visVideo(videoGalleri[3]);
    } if (i== 5) {
        visVideo(videoGalleri[4]);
    } if (i== 7) {
        visVideo(videoGalleri[5]);
    } if (i==8) {
        visVideo(videoGalleri[6])
    } if (i == 10) {
        visVideo(videoGalleri[7]);
    } if (i == 11) {
        visVideo(videoGalleri[8]);
    } if (i == 13) {
        visVideo(videoGalleri[9]);
    }
    visBillede(galleri[i]);
}
// hvordan man afvikler en serie af kommandoer med en funktion
function visBillede( billede ) {
	document.write(
		'<main>'
		+ '<img src="img/'
		+ billede
		+ '" alt="billede">'
		+ '</main>'
	);
}

function visVideo(video) {
    document.write(
        '<main>'
        + '<video controls>'
        + '<source src="vid/' 
        + video 
        + '" type="video/mp4" class="video">'
        + '</video>'
        + '</main>'
    );
}


