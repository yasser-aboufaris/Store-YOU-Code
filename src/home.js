function hero() {
    const bgHeColor = ['bg-violet-300','bg-orange-700','bg-blue-300'];
    const titleHeColor = ['text-violet-800','text-yellow-100','text-blue-800'];
    const buttonHEColor =['bg-green-600','bg-yellow-400','bg-blue-800'];

    let bgHero = document.getElementById('hero');
    let heroText = document.getElementById('hero-text');
    let heroButton = document.getElementById('hero-button');
    let i = 0;
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
}

async function categories() {

    function getCategoryCard(title, image, index) {
        return `<div class="category-card absolute flex flex-col items-center" style="animation-delay: calc(30s / ${categories.length} * ${categories.length - index} * -1 )">
                    <div class="bg-gray w-20 h-20 rounded-full flex items-center justify-center">
                        <img src="${image}" class="w-14 h-14" alt="${title} Category">
                    </div>
                    <span class="text-[8px] sm:text-xs">${title}</span>
                </div>`
    }

    let container = document.querySelector(".category-wrapper");    

    let response = await axios.get("../home.json");
    let categories = response.data.categories;

    for (let i = 0; i < categories.length; i++) {
        container.innerHTML += getCategoryCard(categories[i].title, categories[i].image, i + 1);
    }
}

async function productsSection() {

    await loadProducts();

    let cardsLimit = 4;
    
    function getBestSellingCard(id, title, price, image) {
        return `
            <div data-id="${id}" data-size-index="0" class="product relative bg-white overflow-hidden p-3 rounded-xl min-w-[145px] w-1/5 flex flex-col justify-between">
                <span>
                    <span class="absolute -left-[1.35rem] min-w-24 text-center -rotate-45 px-4 py-1 text-xs bg-secondary text-white">Best Selling</span>
                </span>
                <div>
                    <div class="flex justify-center">
                        <img src="${image}" alt="Product Image" class="max-w-36">
                    </div>
                    <p class="product-title font-bold my-3">${title}</p>
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
            </div>`
    }

    let container = document.querySelector(".best-selling .products");

    let bestSellingProducts = [...products];

    bestSellingProducts.sort((a, b) => b.sales - a.sales);
    bestSellingProducts = bestSellingProducts.slice(0, cardsLimit);
    
    for (let product of bestSellingProducts) {
        container.innerHTML += getBestSellingCard(product.id, product.title, product.price, product.image);
    }


    container.querySelectorAll(".product").forEach(function(product) {
        
        let indexOfClickedBtn = 0;

        product.querySelector(".buy-icon").addEventListener("click", () => addProductToCard(product.getAttribute("data-id"), indexOfClickedBtn));

        let sizesButtons = product.querySelectorAll(".sizes div");

        sizesButtons.forEach((sizeButton, i) => {
            let sizesDiv = sizeButton.parentElement;
    
            sizeButton.onclick = function (){
                if(indexOfClickedBtn == i) return;

                sizesButtons.forEach((btn) => {
                    if (btn.classList.contains("text-white") || btn == sizeButton) {
                        toggleColors(btn);
                    }
                });
    
                indexOfClickedBtn = i;
                product.setAttribute("data-size-index", indexOfClickedBtn);
                changeProductPriceBasedOnSize(product);
    
                let overlay = sizesDiv.querySelector(".active-overlay");
                overlay.style.left = `calc(2.25rem * ${indexOfClickedBtn} + .5rem * ${indexOfClickedBtn} + 2px)`;
            }
        })
    })

    function toggleColors(btn) {
        btn.classList.toggle(`text-white`);
        btn.classList.toggle(`text-bullet`);
    }
}

hero();
categories();
productsSection();