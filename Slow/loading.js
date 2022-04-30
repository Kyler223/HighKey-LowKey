var images = document.querySelectorAll('img');
var i = 0;
var pictureTime = 0;
var nextPictureTime = 10;
var pixelsToLoad = 1;
var backgroundAlpha = 0;

function load() {
    if(i === pictureTime) {
        pixelsToLoad = pixelsToLoad + 3;
        document.documentElement.style.setProperty(
            '--loading-image-height', pixelsToLoad + 'px');
        console.log(i);
        pictureTime = pictureTime + nextPictureTime;
    }
    if(backgroundAlpha < 1) {
        document.documentElement.style.setProperty(
            '--pink-backgrond', `rgba(244, 197, 205, ${backgroundAlpha})`);
            backgroundAlpha = backgroundAlpha + .1;
    }

    i++;
    window.requestAnimationFrame(load);
}

window.requestAnimationFrame(load);