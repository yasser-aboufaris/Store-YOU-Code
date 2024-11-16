let startIndex = 0;
const itemsPerPage = 4;

document.addEventListener('DOMContentLoaded', function () {
    axios.get('../products.json')
    .then(function (response) {
        const products = response.data;

        const discountedProducts = products.filter(function (products) {
            return products.discount !== null;
        });

        console.log(discountedProducts);
        displayProducts(discountedProducts.slice(0, itemsPerPage), '#products-container');
        displayProducts(discountedProducts.slice(itemsPerPage, itemsPerPage * 2), '#products-container-2');
    });
})
.catch(function (error) {
    console.error('Error fetching:', error);
});

function displayProducts(products, containerId) {
    const container = document.querySelector(containerId);
    container.innerHTML = ''


   
}
