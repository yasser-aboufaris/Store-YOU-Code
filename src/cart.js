const cartIcon = document.querySelector("header .cart-icon");
const cartContainer = document.getElementById("cart-container");
const cart = cartContainer.querySelector(".cart");
const productsContainer = cartContainer.querySelector(".products");

function cartEvents() {
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

function addProductToCard(productId) {

    cartIcon.querySelector("span").textContent++;

    Swal.fire({
        icon: "success",
        title: "Product added to your cart",
        showConfirmButton: false,
        timer: 1500
      });

    let product = products[productId];

    product = getProductHtml(product.title, product.price, product.image);

    productsContainer.appendChild(product);
    

}

function getProductHtml(title, price, image) {
    let tempDiv = document.createElement("div");
    tempDiv.innerHTML = `
            <div class="flex justify-between items-center gap-6">

                <div class="flex items-center gap-4 flex-1">
                <input type="checkbox" name="selected" class="appearance-none p-3 border-2 border-secondary rounded-lg">

                <div class="flex flex-1">
                    <div class="flex flex-col items-center gap-2">

                    <img src="${image}" class="max-w-24 max-h-20" alt="">
                    <div class="flex gap-x-2">
                        <span class="bg-dark border-[1.5px] border-dark text-white cursor-pointer py-0.5 w-10 text-center rounded-xl font-bold text-xs hover:bg-dark hover:text-white transition-all duration-300">SM</span>
                        <span class="bg-white border-[1.5px] border-dark text-dark cursor-pointer py-0.5 w-10 text-center rounded-xl font-bold text-xs hover:bg-dark hover:text-white transition-all duration-300">MD</span>
                        <span class="bg-white border-[1.5px] border-dark text-dark cursor-pointer py-0.5 w-10 text-center rounded-xl font-bold text-xs hover:bg-dark hover:text-white transition-all duration-300">LG</span>
                    </div>

                    </div>
                    <div class="flex flex-col justify-end gap-4 flex-1">
                    <p class="text-sm font-semibold">${title}</p>
                    <div class="controll-quantity text-2xl flex justify-end items-center gap-2">
                        <i class="cursor-pointer text-secondary-light fa-solid fa-minus"></i>
                        <span class="select-none px-3 text-lg border border-secondary-light rounded-lg">2</span>
                        <i class="cursor-pointer text-secondary-light fa-solid fa-plus"></i>
                    </div>
                    </div>
                </div>
                </div>

                <h2 class="min-w-[4.5rem] text-right text-3xl">${price}</h2>
            </div>`
    
    return tempDiv.firstElementChild // To return Node element instead of string
}

cartEvents();