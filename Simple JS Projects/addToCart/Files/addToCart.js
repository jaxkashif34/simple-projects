// console.log("Kashif")

const btnLeft = document.querySelector(".fa-chevron-left");
const btnRight = document.querySelector(".fa-chevron-right");
const imgDisplay = document.querySelector(".imgDisplay")
const cross = document.querySelector(".cross");
const storedImage = document.querySelectorAll(".storedImage")
const storedItems = document.querySelectorAll(".stored-items");
const modelContainer = document.querySelector(".modelContainer");
const buttons = document.querySelectorAll(".btn");
const searchInput = document.querySelector("#searchInput");
const StoredThings = document.querySelectorAll(".stored-items");
const imageList = [];
let imageCounter = 0;
const cartBtn = document.querySelector(".cart-btn");
const allInfo = document.querySelector(".all-info");
const addCartBtn = document.querySelectorAll(".store-icon .fas");
// console.log(addCartBtn)




addCartBtn.forEach(btn => {
    btn.addEventListener("click", (e) => {
        if (e.target.parentElement.classList.contains("store-icon")) {
            let fullPath = e.target.parentElement.previousElementSibling.src;
            // console.log(fullPath)
            let position = fullPath.indexOf("images") + 6;
            // console.log(position)
            let partpath = fullPath.slice(position)
            // console.log(partpath)
            let item = {};
            item.img = `./Files/images${partpath}`
            let name = e.target.parentElement.parentElement.children[0].textContent;
            item.name = name;
            let price = e.target.parentElement.parentElement.children[1].textContent;
            let finalPrce = price.slice(0).trim();
            item.finalPrce = finalPrce;
            // console.log(item)

            const cartItem = document.createElement("div");

            // console.log(cartItem)

            cartItem.innerHTML = `  <div class="cart-container" style= " width:17vw; height:10vh; margin: 10px auto; display: flex; justify-content: space-around; align-items: center; background-color:orange;">
                                        <img src="${item.img}" style="border-radius: 50px; width: 60px; height: 60px;" alt="">
                                        <span>${item.name}</span>
                                        <span>${item.finalPrce}</span>
                                    </div>`

            const newCart = document.querySelector(".cart-items")

            // console.log(newCart)

            allInfo.appendChild(cartItem)
        }
    })
})



// console.log(StoredThings)

storedImage.forEach((img) => {
    imageList.push(img.src)
})



// storedItems.forEach((items) => {
//     items.addEventListener('click', (e) => {
//         let imglink = e.target.src;
//         // console.log(imglink)

//         imgDisplay.style.background = `url("${imglink}")`
//         // console.log(display)
//         modelContainer.classList.add("show")
//     })
// })



// btnLeft.addEventListener('click', () => {
//     imageCounter--;
//     if (imageCounter < 0) {
//         imageCounter = imageList.length - 1;
//     }
//     imgDisplay.style.background = `url(${ imageList[imageCounter]})`
// })
// btnRight.addEventListener('click', () => {
//     imageCounter++;
//     if (imageCounter > imageList.length - 1) {
//         imageCounter = 0;
//     }
//     imgDisplay.style.background = `url(${ imageList[imageCounter]})`
// })

// cross.addEventListener('click', () => {
//     modelContainer.classList.remove("show")
// })



buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let filter = e.target.dataset.filter;
        // console.log(filter)
        storedItems.forEach(item => {
            if (filter === "all") {
                item.style.display = "block"
            } else if (item.classList.contains(filter)) {
                item.style.display = "block"
            } else {
                item.style.display = "none"
            }
        });
    })
})


searchInput.addEventListener('keyup', (e) => {
    const srchfilter = e.target.value.toLowerCase().trim();
    // console.log(inputText)
    StoredThings.forEach(item => {
        if (item.textContent.includes(srchfilter)) {
            item.style.display = "block"
        } else {
            item.style.display = "none"
        }
    })
})
