// console.log(document.querySelector("canvas"))

const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d")

// ractangle

// c.fillStyle = "red"
// c.fillRect(100, 100, 150, 150)
// c.fillStyle = "green"
// c.fillRect(400, 100, 150, 150)
// c.fillStyle = "blue"
// c.fillRect(250, 300, 150, 150)
// line

// c.beginPath();
// c.moveTo(100, 300)
// c.lineTo(500, 300)
// c.lineTo(200, 400)
// c.strokeStyle = "rgba(100, 63, 23,0.5)";
// c.stroke();



// for (let i = 0; i < 30; i++) {
//     let x = Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.strokeStyle = "brown"
//     c.arc(x, y, 50, 0, Math.PI * 2)
//     c.stroke();
// }

const mouse = {
    x: undefined,
    y: undefined
}

const colorArray = [
    // "red"
]

let numOfColor=10;


for (let i = 0; i < numOfColor; i++) {
    displayColor = "#";
    let randomcolor = Math.floor(Math.random() * 16777216).toString(16);
    displayColor += randomcolor;
    // console.log(displayColor)
    colorArray.push(displayColor)
}


window.addEventListener("mousemove", function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    // console.log(mouse)
})

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

let maxRadius = 40;
// let minRadius = 3;

function Circle(x, y, radius, dx, dy) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.minRadius = radius;

    this.draw = function () {
        // console.log("Kashif")
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        c.fillStyle = this.color;
        c.fill()
    }
    this.update = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if (this.radius < maxRadius) {
                this.radius += 2;
            }
        } else if (this.radius > this.minRadius) {
            this.radius -= 1
        }

        this.draw();
    }
}

const circleArray = [];

for (let i = 0; i < 900; i++) {
    radius = (Math.random() * 6) + 3;
    x = Math.random() * (innerWidth - radius * 2) + radius;
    y = Math.random() * (innerHeight - radius * 2) + radius;
    dx = (Math.random() - 0.5);
    dy = (Math.random() - 0.5);
    circleArray.push(new Circle(x, y, radius, dx, dy))
}


// console.log(circleArray)



function animate() {
    requestAnimationFrame(animate);
    // console.log("Kashif")
    c.clearRect(0, 0, innerWidth, innerHeight)


    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

animate();
















// randomclr();


// console.log(Math.pow(16,6))






























































































// const canvas = document.querySelector("canvas");
// const c = canvas.getContext("2d");
// canvas.width = window.innerWidth - 5;
// canvas.height = window.innerHeight - 5;
// x = Math.random() * window.innerWidth;
// y = Math.random() * window.innerHeight;
// function Circle(x, y, dx, dy, radius) {
//     this.x = x;
//     this.y = y;
//     this.dx = dx;
//     this.dy = dy;
//     this.radius = radius;
//     this.draw = function () {
//         // console.log(randomColor)
//         c.beginPath();
//         c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//         c.strokeStyle = "blue"
//         c.fill()
//         c.stroke()
//     }
//     this.update = function () {
//         if (this.x + this.radius > innerWidth || this.x - radius < 0) {
//             this.dx = -this.dx
//         }
//         if (this.y + this.radius > innerHeight || this.y - radius < 0) {
//             this.dy = -this.dy
//         }
//         this.x += this.dx
//         this.y += this.dy
//         this.draw()
//     }
// }
// const circle = new Circle(100, 500, 4, 4, 50)
// const circleArray = [];
// for (let i = 0; i < 150; i++) {
//     this.radius = Math.floor(Math.random() * 25) + 20;
//     this.x = Math.random() * (innerWidth - radius * 2) + radius;
//     this.y = Math.random() * (innerHeight - radius * 2) + radius;
//     this.dx = (Math.random() - 0.5) * 4;
//     this.dy = (Math.random() - 0.5) * 4;
//     circleArray.push(new Circle(x, y, dx, dy, radius))
// }
// // console.log(circleArray)
// // console.log(c);
// this.x = Math.random() * innerWidth;
// this.y = Math.random() * innerHeight;
// this.radius = 30;
// this.dx = (Math.random() - 0.5) * 4;
// this.dy = (Math.random() - 0.5) * 4;
// function animate() {
//     requestAnimationFrame(animate);
//     c.clearRect(0, 0, innerWidth, innerHeight)
//     circle.update()
//     for (let i = 0; i < circleArray.length; i++) {
//         circleArray[i].update();
//     }
// }
// animate();