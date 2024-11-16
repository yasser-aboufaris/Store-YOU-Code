const billCard = document.querySelector(".bill-card");
const billInformations = document.querySelector(".bill-informations");
let checkoutProductsContainer = billCard.querySelector(".bill-card .products");

let coupounInput = document.getElementById("coupoun");

const coupoun = "youcode";
const coupounDiscount = 0.10; // 10%
let checkoutProducts = [];

function loadCheckoutProducts() {
    checkoutProducts = cartProducts.filter(product => product.checked); // Get checked products from the cart
    
    checkoutProducts = checkoutProducts.map(function(product) {
        return {
            id: product.id,
            title: products[product.id].title,
            price: product.price,
            quantity: product.quantity,
            sizeIndex: product.sizeIndex
        }
    });

    for (let product of checkoutProducts) {
        product = getBillProductHtml(product.title, product.quantity, product.sizeIndex, product.price);
        checkoutProductsContainer.appendChild(product);
    }
}

function billCardEvents() {

    loadCheckoutProducts();
    radioInputsEvents();

    billCardCalculations();
    coupounInput.onkeyup = function() {
        billCardCalculations();
    }
}

function radioInputsEvents() {

    let inputsControll = billCard.querySelectorAll(".radio-input");

    inputsControll.forEach(function(inputControll){
        let input = inputControll.querySelector("input");
        inputControll.addEventListener("click", function(){
            input.checked = true;
            checkInputs();
            billCardCalculations();
        })
    })

    checkInputs();
}

function checkInputs() {
    let inputs = billCard.querySelectorAll(".radio-input input");
    
    inputs.forEach(function(input){
        if (input.checked) {
            input.parentElement.querySelector("div").classList.remove("hidden");
        }else {
            input.parentElement.querySelector("div").classList.add("hidden");
        }
    })
}

function getBillProductHtml(title, quantity, sizeIndex, price) {
    let tempDiv = document.createElement("div");
    tempDiv.innerHTML = `
                        <div class="product flex justify-between items-center gap-2">
                            <p class="title text-sm">${title} <span class="quantity font-bold">x ${quantity}</span></p>
                            <p class="price">${(quantity * price * sizesRate[sizeIndex]).toFixed(2)}$</p>
                        </div>`

    return tempDiv.firstElementChild;
}

function billCardCalculations() {
    let subtotalElement = billCard.querySelector(".subtotal");
    let subtotal = 0;

    for (let product of checkoutProducts){
        subtotal += product.quantity * product.price * sizesRate[product.sizeIndex];
    }

    subtotalElement.textContent = subtotal.toFixed(2) + "$";

    let shippingCost = Array.from(billCard.querySelectorAll("input[name='shipping']")).find(input => input.checked).value;

    let subtotal2 = subtotal + parseFloat(shippingCost);
    let discount = 0;

    if (coupounInput.value == coupoun) {
        discount = subtotal2 - subtotal2 * (1 - coupounDiscount);
    }
    billCard.querySelector(".coupoun").textContent = "-" + discount.toFixed(2) + "$";

    let total = subtotal2 - discount;
    billCard.querySelector(".total").textContent = total.toFixed(2) + "$";
}

function removeCheckedProductsFromCart() {
    cartProducts = cartProducts.filter(product => !product.checked); // Delete checked products from the cart
    reloadCart();
}

const interval = setInterval(() => {
    if (cartProducts.length > 0) {
        billCardEvents();
        clearInterval(interval);
    }
}, 50);
