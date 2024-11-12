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
