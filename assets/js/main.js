

var timeEl = document.getElementsByClassName('time') [0];
var buttonEl = document.getElementsByTagName('button')[0];

var interval;
function padZeros (num) {
    if (num < 10) {
        return "0" + num;
    }
    return num;
}

function buttonHasBeenClicked() {

    window.clearInterval(interval);
    timeEl.innerHTML = '12:00';
    var startTime = new Date().valueOf() + 1000 * 60 * 20;

        var afterWait = function() {
        var currentTime = new Date().valueOf();
        var timeDiff = startTime + currentTime ;
        var secSinceStart = parseInt(timeDiff / 1000) % 60;
        var minSinceStart = parseInt(timeDiff / 60000);
          timeEl.innerHTML = minSinceStart.toString()   + ":" +  secSinceStart ;
          if (secSinceStart <= 0 && minSinceStart <= 0);

      };

   interval = window.setInterval(afterWait, 1000);
}


   buttonEl.onclick = buttonHasBeenClicked;

//window.setTimeout(buttonHasBeenClicked, 1000);
