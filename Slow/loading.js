var images = document.querySelectorAll('img');
var i = 0;
//on going time
var slowPictureTime = 0;
var meduimPictureTime = 0;
var fastPictureTime = 0;
//current percent cropped
var slowLoadPercent = 98;
var meduimLoadPercent = 98;
var fastLoadPercent = 98;
//when it will crop again
var slowNext = 100;
var meduimNext = 50;
var fastNext = 25;

var backgroundAlpha = 0.2;
var backgroundAlphaTime = 0;

//sets images if they should load slow, meduim, or fast
var imagesForLoop = 1;
images.forEach(image => {
    switch(imagesForLoop) {
        case 1:
            image.classList.add("slow-loading");
            imagesForLoop++
            break;
        case 2:
            image.classList.add("meduim-loading");
            imagesForLoop++
            break;
        case 3:
            image.classList.add("fast-loading");
            imagesForLoop = 1;
            break;
    }
});

console.log(images);

function load() {
    if(i === slowPictureTime && slowLoadPercent > 0) {
        slowLoadPercent = slowLoadPercent - 1;
        document.documentElement.style.setProperty(
            '--slow-loading-image-height', `${slowLoadPercent}%`);
        slowPictureTime = slowPictureTime + slowNext;
    }
    if(i === meduimPictureTime && meduimLoadPercent > 0) {
        meduimLoadPercent = meduimLoadPercent - 1;
        document.documentElement.style.setProperty(
            '--meduim-loading-image-height', `${meduimLoadPercent}%`);
        meduimPictureTime = meduimPictureTime + meduimNext;
    }
    if(i === fastPictureTime && fastLoadPercent > 0) {
        fastLoadPercent = fastLoadPercent - 1;
        document.documentElement.style.setProperty(
            '--fast-loading-image-height', `${fastLoadPercent}%`);
        fastPictureTime = fastPictureTime + fastNext;
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