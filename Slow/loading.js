var images = document.querySelectorAll('img');
var i = 0;
var pictureTime = 0;
var nextPictureTime = 40;
var pixelsToLoad = 98;
var backgroundAlpha = 0.1;
var backgroundAlphaTime = 0;

function load() {
    if(i === pictureTime) {
        pixelsToLoad = pixelsToLoad - 1;
        document.documentElement.style.setProperty(
            '--loading-image-height', pixelsToLoad + '%');
        // console.log(i);
        pictureTime = pictureTime + nextPictureTime;
    }
    if(backgroundAlpha < 1) {
        if(i === backgroundAlphaTime) {
            document.documentElement.style.setProperty(
                '--pink-backgrond', `rgba(244, 197, 205, ${backgroundAlpha})`);
            backgroundAlpha = backgroundAlpha + .2;
            backgroundAlphaTime = i + 300;
            console.log(`backgroundAlpha: ${backgroundAlpha}`);
            // need to round to the nearest decimal
        }
    }

    i++;
    window.requestAnimationFrame(load);
}

window.requestAnimationFrame(load);