export {movingBackground, testModule}

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

    isMobile() ? eventType = "touchmove" : eventType = "mousemove";

    console.log(eventType);

    let img = new Image();

    img.onload = function () {
        // While image loading, extract some properties
        // Same time bound DOM and EventListener 

        let b = document.querySelector(querySelector);

        let limitX = this.width - b.getBoundingClientRect().width;
        let limitY = this.height - b.getBoundingClientRect().height;

        b.addEventListener(eventType, e => {
                
            if (e.target.style.backgroundPositionX <= 0) {
                e.target.style.backgroundPositionX = "1px";
            } else if (e.offsetX >= limitX ) {
                e.target.style.backgroundPositionX = (-limitX) + "px";
            } else {
                e.target.style.backgroundPositionX = -e.offsetX + "px";
            }

            if (e.target.style.backgroundPositionY <= 0) {
                e.target.style.backgroundPositionY = "1px";
            } else if (e.offsetY >= limitY ) {
                e.target.style.backgroundPositionY = (-limitY) + "px";
            } else {
                e.target.style.backgroundPositionY = -e.offsetY + "px";
            }
        });
    }

    img.src = url;
}

function testModule() {
    console.log('hello world from module');
}