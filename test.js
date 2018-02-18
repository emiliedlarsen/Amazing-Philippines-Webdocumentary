var videoGalleri = [
    "singing2.mp4",
    "working3.mp4"
];

function visVideo(video) {
    document.write(
        '<main>'
        + '<video controls>'
        + '<source src="vid/' 
        + video 
        + '" type="video/mp4 class="full">'
        + '</video>'
        + '</main>'
    );
}



/* select an element */
var a = document.getElementById('here');		

/*	
	Detect whether element is visible or not. 
	@url: https://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
*/
function isElementVisible(el) {
			
    var rect     = el.getBoundingClientRect(),
        vWidth   = window.innerWidth || doc.documentElement.clientWidth,
        vHeight  = window.innerHeight || doc.documentElement.clientHeight,
        efp      = function (x, y) { return document.elementFromPoint(x, y) };     

    // Return false if it's not in the viewport
    if (rect.right < 0 || rect.bottom < 0 
            || rect.left > vWidth || rect.top > vHeight)
        return false;

    // Return true if any of its four corners are visible
    return (
          el.contains(efp(rect.left,  rect.top))
      ||  el.contains(efp(rect.right, rect.top))
      ||  el.contains(efp(rect.right, rect.bottom))
      ||  el.contains(efp(rect.left,  rect.bottom))
    );
}		

var keepMe = 0;

function playVideo() {
 a.innerHTML = '<iframe id="ytplayer" type="text/html" width="720" height="405" src="vid/singing2.jpg">';   
}

/* When scrolling do this */			
window.onscroll = function() {
    
    // test
	console.log( isElementVisible( a ) ); // false or true: Q.E.D.	
    
    // as soon as the thing is visible ... fire off some youtube html
    if (isElementVisible(a) == true ) {
        playVideo();
    }
};


var videos = document.getElementsByTagName("video");

function checkScroll() {

    for(var i = 0; i < videos.length; i++) {

        var video = videos[i];

        var x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
            b = y + h, //bottom
            visibleX, visibleY, visible;

            visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
            visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

            visible = visibleX * visibleY / (w * h);

            if (visible > fraction) {
                video.play();
            } else {
                video.pause();
            }

    }

}