let imageElement = document.getElementById('image');

let images = [ '../assets/images/home/promotion/hero-1.svg','../assets/images/home/promotion/hero-2.svg','../assets/images/home/promotion/hero-3.svg','../assets/images/home/promotion/hero-4.svg'];


let Index = 0;
setInterval(function() {
 imageElement.src = images[Index];
 Index = (Index + 1) % images.length;
 }, 3000);




let startIndex = 0;
const itemsPerPage = 4;

document.addEventListener('DOMContentLoaded', async function () {
    
    await loadProducts();

    const discountedProducts = products.filter(function (products) {
        return products.discount !== null;
    });

    displayProducts(discountedProducts.slice(0, itemsPerPage), '#products-container');
    displayProducts(discountedProducts.slice(itemsPerPage, itemsPerPage * 2), '#products-container-2');
    pageProductsEvents();
})

function displayProducts(products, containerId) {
    const container = document.querySelector(containerId);
    container.innerHTML = '';

    const visibleProducts = products.slice(startIndex, startIndex + itemsPerPage);

    visibleProducts.forEach(function (product) {
        container.innerHTML += `
       <div data-id="${product.id}" data-size-index="0" class="product relative bg-white drop-shadow-2xl rounded-2xl overflow-hidden p-3 flex flex-col w-52 justify-between h-[360px]">
            <span>
                <span class="absolute top-2 w-fit text-center  px-4 py-1 text-sm bg-gradient-to-r from-secondary-light from-60% to-secondary rounded-2xl text-white">${product.discount}</span>
            </span>
            <div>
            <div class="flex justify-center mt-3 h-36">
                <img src="${product.image}" alt="${product.title}" class="max-w-36">
            </div>
                <p class="product-title  my-3">${product.title}</p>
            </div>
            <div>
            <div class="relative sizes mb-4 flex w-fit border-2 border-bullet rounded-full text-sm text-center p-[2px] gap-2 font-bold">
                <div class="z-20 w-9 cursor-pointer rounded-full transition-all duration-300 text-white">SM</div>
                <div class="z-20 w-9 cursor-pointer rounded-full transition-all duration-300 text-bullet">MD</div>
                <div class="z-20 w-9 cursor-pointer rounded-full transition-all duration-300 text-bullet">LG</div>
                <span style="height: calc(100% - 2px); left: 2px" class="active-overlay z-10 absolute transition-all duration-300 bg-bullet w-9 rounded-full top-1/2 -translate-y-1/2"></span>
            </div>
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                    <div class="price text-secondary text-2xl font-bold">${product.price}$</div>
                    <div class="line-through font-semibold">${((parseInt(product.discount) / 100 + 1) * product.price).toFixed(2)}$</div>
                </div>
                <span class="buy-icon cursor-pointer flex items-center justify-center bg-secondary text-white text-lg min-w-10 min-h-10 rounded-full"><i class="fa-solid fa-basket-shopping"></i></span>
            </div>
            </div>
        </div> 
      `  
    })

   
}