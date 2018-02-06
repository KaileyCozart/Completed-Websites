window.onload = function() {
    document.getElementById("fade").className += " appear";
};

var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'images/cooking7.jpg';

imgArray[1] = new Image();
imgArray[1].src = 'images/cooking12.jpg';

function arrayFunction() {
    var newGallery = document.getElementsByClassName("screenshotsDiv").backgroundImage = imgArray.src;
    for (i = 0; i < imgArray.length; i++) {
        newGallery.appendChild(imgArray[i]);
    }
};