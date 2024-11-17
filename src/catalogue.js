let rangeInputvalue = document.querySelectorAll(".range-input input");
let priceInputvalue = document.querySelectorAll(".price-input input");
let cardbroduct =document.querySelector(".cardbroduct")
let priceGap = 10;
priceInputvalue[0].value = 0;
priceInputvalue[1].value = 200;
rangeInputvalue[0].value = 0;
rangeInputvalue[1].value = 200;

let btslist = 0


for (let i = 0; i < 2; i++) {
    priceInputvalue[i].addEventListener("input", e => {

        let minp = priceInputvalue[0].value * 1;
        let maxp = priceInputvalue[1].value * 1;
        let diff = maxp - minp

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
        });


    }
}


let ChekInputvalue = document.querySelectorAll(".chek-input input");
let n = 0;
async function price_Max_Min(n) {
    cardbroduct.innerHTML =''
    if (products.length == 0) {
        await loadProducts();
    }

    for (let i = n; i < 30 + n; i++) {
        if ((priceInputvalue[0].value <= parseFloat(products[i].price)) && (priceInputvalue[1].value >= parseFloat(products[i].price))) {
            if ((ChekInputvalue[0].checked == true) && ((products[i].category == "Fruits") || (products[i].category == "Vegetables"))) {
                afichage(products[i].image,products[i].title,products[i].price ,btslist)
               
            }
            if ((ChekInputvalue[1].checked == true ) && (products[i].category === "Beverages")) {
                afichage(products[i].image,products[i].title,products[i].price ,btslist)


            }
            if ((ChekInputvalue[2].checked == true) && (products[i].category === "Meats & Seafood")) {
                afichage(products[i].image,products[i].title,products[i].price ,btslist)
                

            }
            if ((ChekInputvalue[3].checked == true) && (products[i].category === "Biscuits & Snacks")) {
                afichage(products[i].image,products[i].title,products[i].price ,btslist)

            }
            if ((ChekInputvalue[4].checked == true) && (products[i].category === "Breads & Bakery")) {
                afichage(products[i].image,products[i].title,products[i].price ,btslist)



            }
            if ((ChekInputvalue[5].checked == true) && (products[i].category === "Frozen Foods")) {
                afichage(products[i].image,products[i].title,products[i].price ,btslist)
            }


            if ((ChekInputvalue[0].checked == false) && (ChekInputvalue[1].checked == false) && (ChekInputvalue[2].checked == false) && (ChekInputvalue[3].checked == false) && (ChekInputvalue[4].checked == false) && (ChekInputvalue[5].checked == false)) {

                afichage(products[i].image,products[i].title,products[i].price ,btslist)

            }




        }

    }
}

setTimeout(() => price_Max_Min(0) , 4000);

function afichage(image,title ,price ) {      
    console.log(btslist);
    
      
    if(btslist === 1)
    {
          cardbroduct.innerHTML +=`
        <div class="flex justify-center items-center w-full flex-wrap gap-2 ">
            <div class="relative  bg-white drop-shadow-2xl rounded-2xl overflow-hidden  mb-8 p-5  flex   w-[90%] justify-start">
                <span>
                    <span class="absolute top-[5px] min-w-24 text-center  px-4 py-1 text-xs bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl text-white">Best Selling</span>
                </span>
                <div>
                    <div class="flex justify-center mt-3">
                        <img src="${image}" alt="${title}" class="max-w-36">
                    </div>
                </div>
                <div class="w-full">
                    <div>
                    <h3 class="font-bold  my-3">${title}</h3>
                    <p class="mb-3">400+ bought in past month</p>
                    </div>
                    <div class="relative sizes mb-4 flex w-fit border-2 border-bullet rounded-full text-sm text-center p-[2px] gap-2 font-bold">
                        <div class="z-20 w-9 cursor-pointer rounded-full transition-all duration-300 text-white">SM</div>
                        <div class="z-20 w-9 cursor-pointer rounded-full transition-all duration-300 text-bullet">MD</div>
                        <div class="z-20 w-9 cursor-pointer rounded-full transition-all duration-300 text-bullet">LG</div>
                        <span style="height: calc(100% - 2px); left: 2px" class="active-overlay z-10 absolute transition-all duration-300 bg-bullet w-9 rounded-full top-1/2 -translate-y-1/2"></span>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="price text-secondary text-2xl font-bold">${price}$</div>
                        <span class="buy-icon cursor-pointer flex items-center justify-center bg-secondary text-white text-lg min-w-20 min-h-10 rounded-full">Add <i class="fa-solid fa-basket-shopping pl-2"></i></span>
                    </div>
                </div>
            </div>
        </div>`
    }
    else
    {
    
            cardbroduct.innerHTML+=`
       <div class="relative  bg-white drop-shadow-2xl rounded-2xl overflow-hidden  mb-8 p-5  flex flex-col w-56  justify-between h-[400px]">
<span>
  <span class="absolute top-[5px] min-w-24 text-center  px-4 py-1 text-xs bg-gradient-to-r from-orange-300 to-orange-600 rounded-2xl text-white">Best Selling</span>
</span>
<div >
  <div class="flex justify-center mt-3 h-36">
      <img src="${image}" alt="${title}" class="max-w-36">
  </div>
  <p class="product-title  my-3">${title}</p>
</div>
<div>
  <div class="relative sizes mb-4 flex w-fit border-2 border-bullet rounded-full text-sm text-center p-[2px] gap-2 font-bold">
      <div class="z-20 w-9 cursor-pointer rounded-full transition-all duration-300 text-white">SM</div>
      <div class="z-20 w-9 cursor-pointer rounded-full transition-all duration-300 text-bullet">MD</div>
      <div class="z-20 w-9 cursor-pointer rounded-full transition-all duration-300 text-bullet">LG</div>
      <span style="height: calc(100% - 2px); left: 2px" class="active-overlay z-10 absolute transition-all duration-300 bg-bullet w-9 rounded-full top-1/2 -translate-y-1/2"></span>
  </div>
  <div class="flex items-center justify-between">
      <div class="price text-secondary text-2xl font-bold">${price}$</div>
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
    fleter.style.display="block"
   }else
   {
   fleter.style.display="none"

   } 
}

const rowsPerPage = 5; 
let currentPage = 1; 
  

