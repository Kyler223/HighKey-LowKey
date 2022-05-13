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

var backgroundSaturation = 30;
var backgroundSaturationTime = 100;

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
    if(backgroundSaturation < 68.1) {
        if(i === backgroundSaturationTime) {
            //68.1%
            document.documentElement.style.setProperty(
                '--pink-backgrond', `hsl(350, ${backgroundSaturation}%, 86.5%)`);
            backgroundSaturation = 
                Math.round((backgroundSaturation + 15) * 10) / 10;
            if(backgroundSaturation > 68.1) {backgroundSaturation = 68.1;}
            backgroundSaturationTime = i + 300;
            console.log(`backgroundSaturation: ${backgroundSaturation}`);
        }
    }
    console.log(backgroundSaturationTime);
    // console.log(i);
    i++;
    if(slowLoadPercent > 0 || meduimLoadPercent > 0 || 
        fastLoadPercent > 0 || backgroundSaturation < 68.1) {
            window.requestAnimationFrame(load);
        }
}
window.requestAnimationFrame(load);