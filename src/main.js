let products = [];
const sizesRate = [1 , 1.10, 1.25];

async function loadProducts() {
    let response = await axios.get("../products.json");
    products = response.data;
}

function navbar() {
    // Navbar Menu Logic
    const menuIcon = document.querySelector("header .menu-icon");
    const menuList = document.querySelector("header .menu-links");

    menuIcon.onclick = function() {
        menuList.classList.toggle("-top-full");
        menuList.classList.toggle("top-full");

        menuIcon.querySelector(".top-line").classList.toggle("rotate-up");
        menuIcon.querySelector(".middle-line").classList.toggle("opacity-0");
        menuIcon.querySelector(".bottom-line").classList.toggle("rotate-down");
    }
    // End Navbar Menu Logic
    const cartIcon = document.querySelector("header .cart-icon");
    const cartContainer = document.getElementById("cart-container");
    const cart = cartContainer.querySelector(".cart");

    cartContainer.onclick = function (event) {
        if (event.target == cartContainer) {
            cart.classList.add("-right-full");
            cart.classList.remove("right-0");
            setTimeout(() => {
                cartContainer.classList.add("hidden");
            }, 300);
        }
    }

    cartIcon.onclick = function () {
        cartContainer.classList.remove("hidden");
        setTimeout(() => {
            cart.scrollTo({top: 0});
            cart.classList.remove("-right-full");
            cart.classList.add("right-0");
        }, 0);
    }
}


navbar();