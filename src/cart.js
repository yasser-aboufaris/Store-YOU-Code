loadCartHtml();

const cartIcon = document.querySelector("header .cart-icon");
const cartContainer = document.getElementById("cart-container");
const cart = cartContainer.querySelector(".cart");
const productsContainer = cartContainer.querySelector(".products");
const noProductsAlert = cartContainer.querySelector(".no-products");
const orderBtn = cartContainer.querySelector(".orderBtn")

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

    orderBtn.onclick = function () {
        for (let product of cartProducts) {
            if (product.checked) {
                window.location.href = "checkout.html";
                return;
            }
        }
    }
}

function addProductToCard(productId, sizeIndex, isFromLocalStorage = false, checked = true) {

    if (! isFromLocalStorage) {
        Swal.fire({
            icon: "success",
            title: "Product added to your cart",
            showConfirmButton: false,
            timer: 1500
          });
    }

    let isExist = cartProducts.findIndex(cartProduct => 
        cartProduct.id == productId && cartProduct.sizeIndex == sizeIndex
    );

    if (isExist != -1) {
        cartProducts[isExist].quantity++;
    }
    else {
        let product = {...products[productId], sizeIndex, quantity: 1, checked: checked};
        cartProducts.push(product);
    }

    reloadCart();
}

function getProductHtml(id, title, image, quantity, sizeIndex, checked) {
    let tempDiv = document.createElement("div");
    let activeSizeClasses = "bg-dark text-white";
    let nonActiveSizeClasses = "bg-white text-dark";

    tempDiv.innerHTML = `
            <div data-id="${id}" data-size-index="${sizeIndex}" class="product flex justify-between items-center gap-6">

                <div class="flex items-center gap-4 flex-1">

                <div class="checkbox cursor-pointer relative">
                    <input ${checked ? "checked": ""} type="checkbox" name="selected" class="pointer-events-none appearance-none p-3 border-2 border-secondary rounded-lg checked:bg-secondary">
                    <i class="absolute text-lg text-white top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 fa-solid fa-check"></i>
                </div>

                <div class="flex flex-1">
                    <div class="flex flex-col items-center gap-2">

                    <img src="${image}" class="max-w-24 max-h-20" alt="">
                    <div class="sizes flex gap-x-2">
                        <span class="${ sizeIndex == 0 ? activeSizeClasses : nonActiveSizeClasses} border-[1.5px] border-dark cursor-pointer py-0.5 w-10 text-center rounded-xl font-bold text-xs hover:bg-dark hover:text-white transition-all duration-300">SM</span>
                        <span class="${ sizeIndex == 1 ? activeSizeClasses : nonActiveSizeClasses} border-[1.5px] border-dark cursor-pointer py-0.5 w-10 text-center rounded-xl font-bold text-xs hover:bg-dark hover:text-white transition-all duration-300">MD</span>
                        <span class="${ sizeIndex == 2 ? activeSizeClasses : nonActiveSizeClasses} border-[1.5px] border-dark cursor-pointer py-0.5 w-10 text-center rounded-xl font-bold text-xs hover:bg-dark hover:text-white transition-all duration-300">LG</span>
                    </div>

                    </div>
                    <div class="flex flex-col justify-end gap-4 flex-1">
                    <p class="text-sm font-semibold">${title}</p>
                    <div class="controll-quantity text-2xl flex justify-end items-center gap-2">
                        <i class="${quantity > 1 ? "hidden" : ""} delete cursor-pointer text-secondary-light fa-solid fa-trash-can"></i>
                        <i class="${quantity == 1 ? "hidden" : ""} minus cursor-pointer text-secondary-light fa-solid fa-minus"></i>
                        <span class="quantity select-none px-3 text-lg border border-secondary-light rounded-lg">${quantity}</span>
                        <i class="plus cursor-pointer text-secondary-light fa-solid fa-plus"></i>
                    </div>
                    </div>
                </div>
                </div>

                <h2 class="price min-w-[5.5rem] text-right text-3xl"></h2>
            </div>`
    
    return tempDiv.firstElementChild // To return Node element instead of string
}

function productEvents(product) {
    let checkbox = product.querySelector(".checkbox");
    let checkboxInput = checkbox.querySelector("input");

    checkbox.onclick = function (){
        checkboxInput.checked = !checkboxInput.checked;
        
        let index = cartProducts.findIndex(cartProduct => cartProduct.id == product.getAttribute("data-id") && cartProduct.sizeIndex == product.getAttribute("data-size-index"));
        cartProducts[index].checked = checkboxInput.checked;

        orderBtn.disabled = true;
        for (let product of cartProducts) {
            if (product.checked) {
                orderBtn.disabled = false;
                break;
            }
        }

        reloadCart();
    }

    let sizes = product.querySelectorAll(".sizes span");
    sizes.forEach((sizeBtn, i) => {
        sizeBtn.onclick = function() {
            sizes.forEach((btn) => {
                btn.classList.remove("text-white");
                btn.classList.add("text-dark");
                btn.classList.remove("bg-dark");
                btn.classList.add("bg-white");
            })

            sizeBtn.classList.add("text-white");
            sizeBtn.classList.remove("text-dark");
            sizeBtn.classList.add("bg-dark");
            sizeBtn.classList.remove("bg-white");
            
            let index = cartProducts.findIndex(cartProduct => cartProduct.id == product.getAttribute("data-id") && cartProduct.sizeIndex == product.getAttribute("data-size-index"));
            // Check if already there is a product with the same choosen size
            let isAlreadyExiste = cartProducts.findIndex(cartProduct => cartProduct.id == product.getAttribute("data-id") && cartProduct.sizeIndex == i);
            if (isAlreadyExiste != -1) {
                cartProducts[isAlreadyExiste].quantity++;
                cartProducts.splice(index, 1);
            }else {
                cartProducts[index].sizeIndex = i;
            }
            reloadCart();
        }
    })

    let controllQuantity = product.querySelector(".controll-quantity");

    controllQuantity.querySelector(".plus").onclick = function() {
        let index = cartProducts.findIndex(cartProduct => cartProduct.id == product.getAttribute("data-id") && cartProduct.sizeIndex == product.getAttribute("data-size-index"));
        cartProducts[index].quantity++;
        reloadCart();
    }
    controllQuantity.querySelector(".minus").onclick = function() {
        let index = cartProducts.findIndex(cartProduct => cartProduct.id == product.getAttribute("data-id") && cartProduct.sizeIndex == product.getAttribute("data-size-index"));
        cartProducts[index].quantity--;
        reloadCart();
    }

    controllQuantity.querySelector(".delete").onclick = function() {
        let index = cartProducts.findIndex(cartProduct => cartProduct.id == product.getAttribute("data-id") && cartProduct.sizeIndex == product.getAttribute("data-size-index"));
        cartProducts.splice(index, 1);
        reloadCart();
    }
}

function changeProductPriceBasedOnSize(product) {
    let priceDiv = product.querySelector(".price");

    let price = products[product.getAttribute("data-id")].price;

    let quantity = product.querySelector(".quantity");
    if (quantity) {
        price *= quantity.textContent;
    }

    let newPrice = (price * sizesRate[product.getAttribute("data-size-index")]).toFixed(2);
    
    priceDiv.textContent = newPrice + "$";
}

function refreshTotals() {
    let selectedProductsPrice = 0;
    cartContainer.querySelectorAll(".product").forEach(cartProduct => {
        if(cartProduct.querySelector("input").checked){
            selectedProductsPrice += parseFloat(cartProduct.querySelector(".price").textContent);
        }
    })

    let totalProductsPrice = 0;
    let totalProductsQuantity = 0;
    for (let product of cartProducts) {
        totalProductsPrice += product.price * product.quantity * sizesRate[product.sizeIndex];
        totalProductsQuantity += product.quantity;
    }

    cart.querySelector(".total-selected-price").textContent = selectedProductsPrice.toFixed(2);
    cart.querySelector(".total-price").textContent = totalProductsPrice.toFixed(2);
    cartIcon.querySelector("span").textContent = totalProductsQuantity;
}

function reloadCart() {
    productsContainer.innerHTML = "";

    cartProducts.forEach(cartProduct => {
        cartProduct = getProductHtml(cartProduct.id, cartProduct.title, cartProduct.image, cartProduct.quantity, cartProduct.sizeIndex, cartProduct.checked);

        productsContainer.appendChild(cartProduct);
        changeProductPriceBasedOnSize(cartProduct);
        productEvents(cartProduct);
    })
    refreshTotals();

    if (cartProducts.length == 0) {
        noProductsAlert.classList.remove("hidden")
    }else {
        noProductsAlert.classList.add("hidden")
    }

    storeCartProducts();
}

async function getCartProductsFromLocalStorage() {
    
    if (localStorage.getItem("cart-products")) {

        await loadProducts();

        arr = JSON.parse(localStorage.getItem("cart-products"));

        for (let product of arr) {
            for (let i = 0; i < product.quantity; i++) {
                addProductToCard(product.id, product.sizeIndex, true, product.checked);
            }
        }

        orderBtn.disabled = true;
        for (let product of cartProducts) {
            if (product.checked) {
                orderBtn.disabled = false;
                break;
            }
        }
    }
}

function storeCartProducts() {
    let arr = cartProducts.map(product => {
        return {
            id: product.id,
            sizeIndex: product.sizeIndex,
            quantity: product.quantity,
            checked: product.checked
        }
    })

    localStorage.setItem("cart-products", JSON.stringify(arr));
}

function loadCartHtml() {
    let tempDiv = document.createElement("div");
    tempDiv.innerHTML = `
    <!-- Cart -->
    <div id="cart-container" class="hidden z-50 fixed top-0 left-0 w-full min-h-screen bg-black bg-opacity-60">
        <div class="cart fixed -right-full top-0 w-11/12 sm:w-3/5 lg:w-1/2 max-h-[95%] rounded-s-lg bg-white overflow-y-scroll no-scrollbar transition-all duration-500">
            <h1 class="font-bold text-3xl text-center py-5 border-b-2 border-b-gray">Your Cart</h1>

            <div class="products flex flex-col gap-4 py-6 px-5">

            </div>
            <div class="no-products text-center text-2xl text-secondary font-bold mt-1 mb-12">
            There's no products in the cart.
            </div>

            <div class="px-5 border-t-2 border-t-gray py-4">
            <div class="flex justify-between text-3xl">
                <h3 class="font-semibold">Selected: <span class="total-selected-price">0</span>$</h3>
                <h3 class="font-semibold">Total: <span class="total-price">0</span>$</h3>
            </div>
            <p class="text-gray-dark text-sm mt-2">Taxes, discounts and shipping calculated after ordering.</p>
            <button type="submit" disabled class="block orderBtn disabled:opacity-60 text-white py-2 px-4 rounded-lg mt-8 mx-auto bg-gradient-to-r from-secondary-light from-70% to-secondary">Order Now</button>
            </div>
        </div>
    </div>
  <!-- End Cart -->
  `
    document.body.appendChild(tempDiv.firstElementChild);
}


cartEvents();
getCartProductsFromLocalStorage();