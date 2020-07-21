export {movingBackground, testModule, getKeyByValue}

// Allow background to move along cursor or tapemove
function movingBackground(url, querySelector) {

    let eventType = "";

    // Check if is mobile device
    function isMobile() {
        if( navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
        ){
            return true;
        }

    }

    isMobile() ? eventType = "touchmove" : eventType = "click";

    console.log(eventType);

    let img = new Image();

    img.onload = function () {

        // While image loading, extract some properties
        // Same time bound DOM and EventListener 

        let b = document.querySelector(querySelector);

        let limitX = this.width - b.getBoundingClientRect().width;
        let limitY = this.height - b.getBoundingClientRect().height;

        console.log('image loaded');

        b.addEventListener(eventType, e => {

        /*********
         * 
         *  Here this == img, != b (currentEvent)
         *  Cause to arrow Function
         * 
         */
        

            // console.log(this);
            // console.log(b)
            // console.log(e);
                
            if (b.style.backgroundPositionX <= 0) {
                b.style.backgroundPositionX = "0px";
            } else if (e.offsetX >= limitX ) {
                b.style.backgroundPositionX = (-limitX) + "px";
            } else {
                b.style.backgroundPositionX = -e.offsetX + "px";
            }

            if (b.style.backgroundPositionY <= 0) {
                b.style.backgroundPositionY = "0px";
            } else if (e.offsetY >= limitY ) {
                b.style.backgroundPositionY = (-limitY) + "px";
            } else {
                b.style.backgroundPositionY = -e.offsetY + "px";
            }
        });
    }

    img.src = url;
}

function testModule() {
    console.log('hello world from module');
}


var getKeyByValue = (object, value) => {
    return Object.keys(object).find(key => object[key] === value);
}