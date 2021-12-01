setInterval(setClock, 1000)

var hourHand = document.querySelector('[hour-hand]');
var minuteHand = document.querySelector('[minute-hand]');
var secondHand = document.querySelector('[second-hand]');
function setClock(){
    var currentDate = new Date();
    var secondsRatio = currentDate.getSeconds()/60;
    var minutesRatio = (secondsRatio+currentDate.getMinutes())/60;
    var hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    
    setRotation(hourHand, hoursRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(secondHand, secondsRatio);
}

function setRotation(hand, ratio) {
    hand.style.setProperty('--rotate',ratio*360)
}
setClock()