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
//home-hero transition
const bgHeColor = ['bg-violet-300','bg-orange-700','bg-blue-300'];
const titleHeColor = ['text-violet-800','text-yellow-100','text-blue-800'];
const buttonHEColor =['bg-green-600','bg-yellow-400','bg-blue-800'];

let bgHero = document.getElementById('hero');
let heroText = document.getElementById('hero-text');
let heroButton = document.getElementById('hero-button');
let i=0;
function changeBg() {
    bgHero.classList.remove(bgHeColor[i]);
    heroText.classList.remove(titleHeColor[i]);
    heroButton.classList.remove(buttonHEColor[i]);

    i=(i+1)% 3;
    bgHero.classList.add(bgHeColor[i]);
    heroText.classList.add(titleHeColor[i]);
    heroButton.classList.add(buttonHEColor[i]);
  }

  setInterval(changeBg, 4000);


