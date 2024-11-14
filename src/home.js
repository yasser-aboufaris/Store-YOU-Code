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

async function products() {

    let cardsLimit = 4;
    
    function getBestSellingCard(title, price, image) {
        return `
            <div class="bg-white p-3 rounded-xl min-w-[145px] w-1/5 flex flex-col justify-between">
                <div>
                    <div class="flex justify-center">
                        <img src="${image}" alt="Product Image" class="max-w-36">
                    </div>
                    <p class="product-title font-bold my-3">${title}</p>
                </div>
                <div>
                    <div class="sizes mb-4 flex w-fit border-2 border-bullet rounded-full text-sm text-center p-[2px] gap-2 font-bold">
                        <div class="w-9 cursor-pointer rounded-full bg-bullet text-white">SM</div>
                        <div class="w-9 cursor-pointer rounded-full text-bullet">MD</div>
                        <div class="w-9 cursor-pointer rounded-full text-bullet">LG</div>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="text-secondary text-2xl font-bold">${price}</div>
                        <span class="buy-icon cursor-pointer flex items-center justify-center bg-secondary text-white text-lg min-w-10 min-h-10 rounded-full"><i class="fa-solid fa-basket-shopping"></i></span>
                    </div>
                </div>
            </div>`
    }

    let container = document.querySelector(".best-selling .products");    

    let response = await axios.get("../products.json");
    let products = response.data;

    products.sort((a, b) => b.sales - a.sales);
    products = products.slice(0, cardsLimit);
    
    for (let product of products) {
        container.innerHTML += getBestSellingCard(product.title, product.price, product.image);
    }
}

hero();
categories();
products();