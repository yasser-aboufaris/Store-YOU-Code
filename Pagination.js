
let pagination_ul = document.querySelector("#pagination");


function Pagination(n) {
    if (!products || products.length === 0) {
        console.error("Produits non chargés.");
        return;
    }
    price_Max_Min(n);
}


function generatePagination(totalPages = 5) {
    pagination_ul.innerHTML = ""; 

    
    const prevPage = document.createElement("li");
    prevPage.className = "current-page hover:bg-primary h-6 w-6 hover:text-white text-center rounded-md";
    prevPage.innerHTML = `<a href="#" class="page_link"><i class="fa-solid fa-chevron-left"></i></a>`;
    prevPage.addEventListener("click", () => Pagination(-10));
    pagination_ul.appendChild(prevPage);

    for (let i = 0; i < totalPages; i++) {
        const li = document.createElement("li");
        li.className = "current-page hover:bg-primary h-6 w-6 hover:text-white text-center rounded-md";
        li.innerHTML = `<a href="#" class="page_link">${i + 1}</a>`;
        li.addEventListener("click", () => Pagination(i * 10));
        pagination_ul.appendChild(li);
    }

    const nextPage = document.createElement("li");
    nextPage.className = "current-page hover:bg-primary h-6 w-6 hover:text-white text-center rounded-md";
    nextPage.innerHTML = `<a href="#" class="page_link"><i class="fa-solid fa-chevron-right"></i></a>`;
    nextPage.addEventListener("click", () => Pagination(10));
    pagination_ul.appendChild(nextPage);
}

generatePagination();
