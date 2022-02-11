//create a canvas object fro HTML element
var canvas = document.getElementById('canvas');
//create a 2d drawing object
var c = canvas.getContext('2d');
//calculate the clock radius by using the height
var radius = canvas.height / 2;
//remap the x and y axis to the center of the canvas
c.translate(radius, radius);
//reduce clock radius by 90%
radius = radius * 0.90;

setInterval(drawClock, 1000); //run the drawClock function every second.

function drawClock() {
    drawFace(c, radius);
    drawNumbers(c, radius);
    // drawTime(c, radius);
}

function drawFace(c, radius) {
    var grad;
    //draw white circle for the face
    c.beginPath();
    c.arc(0, 0, radius, 0, 2 * Math.PI);
    c.fillStyle = "White";
    c.fill();
    // create a radial gradient (inner, middle, and outer edge of clock)
    grad = c.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    grad.addColorStop(0, 'red');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, 'orange');
    //define gradient as stroke style
    c.strokeStyle = grad;
    c.lineWidth = radius * 0.1;
    c.stroke();
    //draw the center of the clock
    c.beginPath();
    c.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
    c.fillStyle = 'green';
    c.fill();
}

function drawNumbers(c, radius) {
    var ang;
    var num;

    c.font = radius * 0.15 + "px arial"; //set font at 15% of radius
    c.textBaseline = "middle"; //set text alignment to middle
    c.textAlign = "center"; //set text alignment to center
    for (num = 1; num < 13; num++) { //calculate the print position for each number
        ang = num * Math.PI / 6;
        c.rotate(ang);
        c.translate(0, -radius * 0.85);
        c.rotate(-ang);
        c.fillText(num.toString(), 0, 0);
        c.rotate(ang);
        c.translate(0, radius * 0.85);
        c.rotate(-ang);
    }
}

// function drawTime(c, radius){
//     var now = new Date();
//     var hour = now.getHours();
//     var minute = now.getMinutes();
//     var second = now.getSeconds();
//     //hour
//     hour = hour%12;
//     //calculate angle of hour hand
//     hour = (hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
//     //make hour hand 50% of canvas's radius
//     drawHand(c, hour, radius*0.5, radius*0.07);
//     //minute
//     //calculate angle of minute hand
//     minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
//     //make minute hand 80% of canvas's radius
//     drawHand(c, minute, radius*0.8, radius*0.07);
//     //second
//     //calculate angle of second hand
//     second=(second*Math.PI/30);
//     //make second hand 90% of canvas's radius
//     drawHand(c, second, radius*0.9, radius*0.02);
// }

// function drawHand(c, pos, length, width){
//     c.beginPath();
//     c.lineWidth = width;
//     c.lineCap = "round";
//     c.moveTo(0,0);
//     c.rotate(pos);
//     c.lineTo(0, -length);
//     c.stroke();
//     c.rotate(-pos);
// }