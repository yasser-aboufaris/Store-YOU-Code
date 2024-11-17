let rangeInputvalue = document.querySelectorAll(".range-input input");
let priceInputvalue = document.querySelectorAll(".price-input input");
let cardbroduct = document.querySelector(".cardbroduct");
let maxpr= document.querySelector("#maxpr");
let minpr= document.querySelector("#minpr");



let priceGap = 10;
priceInputvalue[0].value = 0;
priceInputvalue[1].value = 1000;
rangeInputvalue[0].value = 0;
rangeInputvalue[1].value = 1000;
let contuer = 0;
let contuerresults = 0;
let btslist = 0
for (let i = 0; i < 2; i++) {
    priceInputvalue[i].addEventListener("input", e => {

        let minp = priceInputvalue[0].value * 1;
        let maxp = priceInputvalue[1].value * 1;
        let diff = maxp - minp
        minpr.innerText=minp
        maxpr.innerText=maxp
        if (minp < 0) {
            alert("minimum price cannot be less than 0");
            priceInputvalue[0].value = 0;
            minp = 0;
        }
        if (maxp < 0) {
            alert("max price cannot be less than 0");
            priceInputvalue[1].value = 0;
            maxp = 0;
        }

        if (minp > maxp - priceGap) {
            priceInputvalue[0].value = maxp - priceGap;
            minp = maxp - priceGap;

            if (minp < 0) {
                priceInputvalue[0].value = 0;
                minp = 0;
            }

        }

        if (!(diff < priceGap)) {

            rangeInputvalue[0].value = minp;
            rangeInputvalue[1].value = maxp;
        }

        minpr.innerText=minp
        maxpr.innerText=maxp
    });

    for (let i = 0; i < rangeInputvalue.length; i++) {
        rangeInputvalue[i].addEventListener("input", e => {
            let minVal = rangeInputvalue[0].value * 1;
            let maxVal = rangeInputvalue[1].value * 1;

            let diff = maxVal - minVal

            if (diff < priceGap) {

                if (e.target.className === "min-range") {
                    rangeInputvalue[0].value = maxVal - priceGap;
                }
                else {
                    rangeInputvalue[1].value = minVal + priceGap;
                }
            }
            else {

                priceInputvalue[0].value = minVal;
                priceInputvalue[1].value = maxVal;


            }
            minpr.innerText=minVal
            maxpr.innerText=maxVal
        });


    }
}


let ChekInputvalue = document.querySelectorAll(".chek-input input");
let n = 0;
async function price_Max_Min(n) {
    cardbroduct.innerHTML = ''
    if (products.length == 0) {
        await loadProducts();



    }

    for (let i = n; i < products.length; i++) {


        if ((priceInputvalue[0].value <= parseFloat(products[i].price)) && (priceInputvalue[1].value >= parseFloat(products[i].price))) {
            if ((ChekInputvalue[0].checked == true) && ((products[i].category == "Fruits") || (products[i].category == "Vegetables"))) {
                afichage(products[i])
                contuer++
            }
            if ((ChekInputvalue[1].checked == true) && (products[i].category === "Beverages")) {
                afichage(products[i])

                contuer++

            }
            if ((ChekInputvalue[2].checked == true) && (products[i].category === "Meats & Seafood")) {
                afichage(products[i])

                contuer++
            }
            if ((ChekInputvalue[3].checked == true) && (products[i].category === "Biscuits & Snacks")) {
                afichage(products[i])
                contuer++
                contuerresults4 = 0;

            }
            if ((ChekInputvalue[4].checked == true) && (products[i].category === "Breads & Bakery")) {
                afichage(products[i])
                contuer++
            }
            if ((ChekInputvalue[5].checked == true) && (products[i].category === "Frozen Foods")) {
                afichage(products[i])
                contuer++
            }
            if ((ChekInputvalue[6].checked == true) && (products[i].category === "Juices")) {
                afichage(products[i])
                contuer++
            }
            if ((ChekInputvalue[7].checked == true) && (products[i].category === "Electronics")) {
                afichage(products[i])
                contuer++
            }


            if ((ChekInputvalue[0].checked == false) && (ChekInputvalue[1].checked == false) && (ChekInputvalue[2].checked == false) && (ChekInputvalue[3].checked == false) && (ChekInputvalue[4].checked == false) && (ChekInputvalue[5].checked == false) && (ChekInputvalue[6].checked == false) && (ChekInputvalue[7].checked == false)) {

                afichage(products[i])
                contuer++
                resultsAfich(products.length)

                
                
            }




        }
        if (contuer === 8) {
            contuer = 0
            break

        }

    }
    

    
    pageProductsEvents();
}

price_Max_Min(0);

function afichage(productData) {
    if (btslist === 1) {
        cardbroduct.innerHTML += `
        <div data-id="${productData.id}" data-size-index="0" class="product flex justify-center items-center w-full flex-wrap gap-2 ">
            <div class="relative bg-white drop-shadow-2xl rounded-2xl overflow-hidden  p-5 flex w-[90%] justify-start">
                <span>
                    <span class="absolute top-2 min-w-24 text-center  px-4 py-1 text-xs bg-gradient-to-r from-secondary-light from-60% to-secondary rounded-2xl text-white">High Quality</span>
                </span>
                <div>
                    <div class="flex justify-center mt-4 md:mt-3">
                        <img src="${productData.image}" alt="${productData.title}" class="max-w-36 w-full">
                    </div>
                </div>
                <div class="w-full">
                    <div>
                    <h3 class="font-bold text-xs md:text-xl  my-3">${productData.title}</h3>
                    <p class="mb-3 hidden  md:block ">${productData.sales}+ bought in past month</p>
                    </div>
                    <div class="relative sizes md:mb-4 flex w-fit border-2 border-bullet rounded-full text-sm text-center p-[2px] gap-2 font-bold">
                        <div class="z-20 w-9 cursor-pointer rounded-full transition-all duration-300 text-white">SM</div>
                        <div class="z-20 w-9 cursor-pointer rounded-full transition-all duration-300 text-bullet">MD</div>
                        <div class="z-20 w-9 cursor-pointer rounded-full transition-all duration-300 text-bullet">LG</div>
                        <span style="height: calc(100% - 2px); left: 2px" class="active-overlay z-10 absolute transition-all duration-300 bg-bullet w-9 rounded-full top-1/2 -translate-y-1/2"></span>
                    </div>
                    <div class="flex items-center justify flex-col w-full md:flex-row md:justify-between">
                        <div class="price text-secondary text-lg md:text-2xl  font-bold">${productData.price}$</div>
                        <span class="buy-icon cursor-pointer flex items-center px-2 bg-secondary text-white text-lg min-w-20 md:min-h-10 rounded-full w-[50%]  flex-row  justify-between md:justify-center md:w-auto md:text-xl"> <span> Add </span>    <i class="fa-solid fa-basket-shopping pl-2 "></i></span>
                    </div>
                </div>
            </div>
        </div>`
    }
    else {

        cardbroduct.innerHTML += `
       <div data-id="${productData.id}" data-size-index="0" class="product relative bg-white drop-shadow-2xl rounded-2xl overflow-hidden p-3 flex flex-col w-52 justify-between h-[360px]">
            <span>
                <span class="absolute top-2 min-w-24 text-center  px-4 py-1 text-xs bg-gradient-to-r from-secondary-light from-60% to-secondary rounded-2xl text-white">High Quality</span>
            </span>
            <div>
            <div class="flex justify-center mt-3 h-36">
                <img src="${productData.image}" alt="${productData.title}" class="max-w-36">
            </div>
                <p class="product-title  my-3">${productData.title}</p>
            </div>
            <div>
            <div class="relative sizes mb-4 flex w-fit border-2 border-bullet rounded-full text-sm text-center p-[2px] gap-2 font-bold">
                <div class="z-20 w-9 cursor-pointer rounded-full transition-all duration-300 text-white">SM</div>
                <div class="z-20 w-9 cursor-pointer rounded-full transition-all duration-300 text-bullet">MD</div>
                <div class="z-20 w-9 cursor-pointer rounded-full transition-all duration-300 text-bullet">LG</div>
                <span style="height: calc(100% - 2px); left: 2px" class="active-overlay z-10 absolute transition-all duration-300 bg-bullet w-9 rounded-full top-1/2 -translate-y-1/2"></span>
            </div>
            <div class="flex items-center justify-between flex-wrap">
                <div class="price text-secondary text-2xl font-bold">${productData.price}$</div>
                <span class="buy-icon cursor-pointer flex items-center justify-center bg-secondary text-white text-lg min-w-10 min-h-10 rounded-full"><i class="fa-solid fa-basket-shopping"></i></span>
            </div>
            </div>
        </div> 
      `

    }




}


function listgrid() {
    btslist = 0
    price_Max_Min(0)
}

function listlin() {
    btslist = 1
    price_Max_Min(0)
}

let fleter = document.querySelector(".fleter")
function fleteractive() {
    if (fleter.style.display === "none") {
        fleter.style.display = "block"
    } else {
        fleter.style.display = "none"

    }
}

const rowsPerPage = 8;
let currentPage = 1;

let results = document.getElementById('results');
function resultsAfich(n) {
    let i

    results.innerText = "Showing all " + n + " results"
}

