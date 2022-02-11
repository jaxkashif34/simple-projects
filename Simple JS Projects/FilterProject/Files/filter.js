const buttons = document.querySelectorAll(".btn");
const StoredItems = document.querySelectorAll(".stored-items");
buttons.forEach(btn => {
    btn.addEventListener('click', function (e) {
        const filter = e.target.dataset.filter;
        StoredItems.forEach(item => {
            if (filter === "all") {
                item.style.display = "block"
            } else if (item.classList.contains(filter)) {
                item.style.display = "block"
            } else {
                item.style.display = "none"
            }
        });

    })
});
const searchInput = document.querySelector("#searchInput");
const StoredThings = document.querySelectorAll(".stored-items");
searchInput.addEventListener('keyup', (e) => {
    e.preventDefault();
    const srchfilter = e.target.value.toLowerCase().trim();
    StoredThings.forEach(item => {
        if (item.textContent.includes(srchfilter)) {
            item.style.display = "block"
        } else {
            item.style.display = "none"
        }
    });

})



