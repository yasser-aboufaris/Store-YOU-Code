let products = [];
let cartProducts = [];
const sizesRate = [1 , 1.10, 1.25];

async function loadProducts() {
    let response = await axios.get("../products.json");
    products = response.data;
    products.forEach(product => {
        product.price = product.price.toFixed(2);
    });
}

function navbar() {
    const menuIcon = document.querySelector("header .menu-icon");
    const menuList = document.querySelector("header .menu-links");

    menuIcon.onclick = function() {
        menuList.classList.toggle("-top-full");
        menuList.classList.toggle("top-full");

        menuIcon.querySelector(".top-line").classList.toggle("rotate-up");
        menuIcon.querySelector(".middle-line").classList.toggle("opacity-0");
        menuIcon.querySelector(".bottom-line").classList.toggle("rotate-down");
    }
}


navbar();