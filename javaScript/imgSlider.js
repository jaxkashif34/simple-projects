// console.log("Kashif")

const pictures = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4"
];
const btns = document.querySelectorAll(".btn");
const imageDiv = document.querySelector(".imageDiv");
let counter = 0;
btns.forEach(function (buttons) {
    buttons.addEventListener("click", function (e) {
        if (buttons.classList.contains("btn-left")) {
            counter--;
            if (counter < 0) {
                counter = pictures.length - 1
            }
            imageDiv.style.backgroundImage = `url(./images/${pictures[counter]}.jpg)`
            console.log("left")
        }
        if (buttons.classList.contains("btn-right")) {
            counter++;
            if (counter > pictures.length - 1) {
                counter = 0
            }
            imageDiv.style.backgroundImage = `url(./images/${pictures[counter]}.jpg)`
            console.log("left")
        }
    })
})








