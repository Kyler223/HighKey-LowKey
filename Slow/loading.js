var timeToLoad = 2000;
var pixelsToLoad = 3;

setInterval(function() {
    pixelsToLoad = pixelsToLoad + 3;
    document.documentElement.style.setProperty(
        '--loading-image-height', pixelsToLoad + 'px');
}, timeToLoad);