const form = document.getElementById("checkout-form");

const billCard = form.querySelector(".bill-card");
const billInformations = form.querySelector(".bill-informations");
let checkoutProductsContainer = billCard.querySelector(".bill-card .products");

const fullnameInput = document.getElementById("fullname");
const emailInput = document.getElementById("email");
const addressInput = document.getElementById("address");
const coupounInput = document.getElementById("coupoun");
const orderNoteInput = document.getElementById("notes");
const agreeInput = document.getElementById("agree");

const coupoun = "youcode";
const coupounDiscount = 0.10; // 10%
let total = 0;
let checkoutProducts = [];

form.onsubmit = function(e) {
    e.preventDefault();
    
    let message = validateInputs();

    if (message != 1) {
        showAlert(message);
        return;
    }

    removeCheckedProductsFromCart();

    Swal.fire({
        icon: "success",
        title: "Your order has been placed successfully",
        showConfirmButton: false,
        timer: 1500
    }).then(() => {
        window.location.href = './';
    });;
}

function loadCheckoutProducts() {
    checkoutProducts = cartProducts.filter(product => product.checked); // Get checked products from the cart
    
    if (checkoutProducts.length == 0) {
        window.location.href = "./";
    }

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

    total = subtotal2 - discount;
    billCard.querySelector(".total").textContent = total.toFixed(2) + "$";
}

function removeCheckedProductsFromCart() {
    cartProducts = cartProducts.filter(product => !product.checked); // Delete checked products from the cart
    reloadCart();
}

function validateInputs() {
    let inputs = [fullnameInput, emailInput, addressInput];
    for (let input of inputs) {
        if (input.value.trim() == "") {
            return "Please fill all the required fields.";
        }
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (! emailRegex.test(emailInput.value)) {
        return "Invalid format for the email."
    }

    if (! agreeInput.checked) {
        return "You need to agree with the terms and conditions.";
    }

    return 1;
}

function showAlert(message) {
    let alertElement = document.getElementById("alert");
    alertElement.textContent = message;
    alertElement.classList.remove("hidden");

    let inputs = [fullnameInput, emailInput, addressInput];

    for (let input of inputs) {
        input.onfocus = function() {
            hideAlert();
        }
    }
    agreeInput.onchange = function() {
        hideAlert();
    }
}
function hideAlert() {
    let alertElement = document.getElementById("alert");
    alertElement.classList.add("hidden");
}

const interval = setInterval(() => {
    if (cartProducts.length > 0) {
        billCardEvents();
        clearInterval(interval);
    }
}, 50);
