const cardList = `
    <div class="bg-white rounded-2xl p-5 w-full shadow-2xl list-carte">
        <img src="../images/img-1.png" alt="Banana Juice">
        <h6>Banana Juice - High Calcium & Vitamin Z</h6>
        <div class="flex justify-start gap-3 border-2 rounded-xl w-28 pl-1 text-sm p-[1PX] mt-3">
            <div class="bg-[#7F7F7F] text-white rounded-full w-8 flex items-center justify-center "><span>SM</span></div>
            <span class="text-gray-500">DM</span>
            <span class="text-gray-500">LG</span>
        </div>
        <div class="flex items-center justify-between mt-7">
            <h1 class="text-[#DC2626] text-xl font-bold">$1.99</h1>
            <button class="bg-[#DC2626] rounded-full h-10 w-10 border border-gray-200">
                <img class="w-8" src="../images/shopping-basket.png" alt="">
            </button>
        </div>
    </div>
`;

const cardGrid = `
    <div class="flex justify-around flex-wrap">
            <div class="bg-white rounded-2xl mb-8 p-5 w-56 shadow-2xl list-container">
                <img src="../images/img-1.png" alt="Banana Juice">
                <h6>Banana Juice - High Calcium & Vitamin Z</h6>
                <div class="flex justify-start gap-3 border-2 rounded-xl w-28 pl-1 text-sm p-[1PX] mt-3">
                    <div class="bg-[#7F7F7F] text-white rounded-full w-8 flex items-center justify-center ">
                        <span>SM</span>
                    </div>
                    <span class="text-gray-500">DM</span>
                    <span class="text-gray-500">LG</span>
                </div>
                <div class="flex items-center gap-[100px] mt-7">
                    <h1 class="text-[#DC2626] text-xl font-bold">$1.99</h1>
                    <button class="bg-[#DC2626] rounded-full h-10 w-10 border border-gray-200">
                        <img class="w-8" src="../images/shopping-basket.png" alt="">
                    </button>
                </div>
            </div>
            <div class="bg-white rounded-2xl mb-8 p-5 w-56 shadow-2xl">
                <img src="../images/img-1.png" alt="Banana Juice">
                <h6>Banana Juice - High Calcium & Vitamin Z</h6>
                <div class="flex justify-start gap-3 border-2 rounded-xl w-28 pl-1 text-sm p-[1PX] mt-3">
                    <div class="bg-[#7F7F7F] text-white rounded-full w-8 flex items-center justify-center ">
                        <span>SM</span>
                    </div>
                    <span class="text-gray-500">DM</span>
                    <span class="text-gray-500">LG</span>
                </div>
                <div class="flex items-center gap-[100px] mt-7">
                    <h1 class="text-[#DC2626] text-xl font-bold">$1.99</h1>
                    <button class="bg-[#DC2626] rounded-full h-10 w-10 border border-gray-200">
                        <img class="w-8" src="../images/shopping-basket.png" alt="">
                    </button>
                </div>
            </div>
            <div class="bg-white rounded-2xl mb-8 p-5 w-56 shadow-2xl">
                <img src="../images/img-1.png" alt="Banana Juice">
                <h6>Banana Juice - High Calcium & Vitamin Z</h6>
                <div class="flex justify-start gap-3 border-2 rounded-xl w-28 pl-1 text-sm p-[1PX] mt-3">
                    <div class="bg-[#7F7F7F] text-white rounded-full w-8 flex items-center justify-center ">
                        <span>SM</span>
                    </div>
                    <span class="text-gray-500">DM</span>
                    <span class="text-gray-500">LG</span>
                </div>
                <div class="flex items-center gap-[100px] mt-7">
                    <h1 class="text-[#DC2626] text-xl font-bold">$1.99</h1>
                    <button class="bg-[#DC2626] rounded-full h-10 w-10 border border-gray-200">
                        <img class="w-8" src="../images/shopping-basket.png" alt="">
                    </button>
                </div>
            </div>
            <div class="bg-white rounded-2xl mb-8 p-5 w-56 shadow-2xl">
                <img src="../images/img-1.png" alt="Banana Juice">
                <h6>Banana Juice - High Calcium & Vitamin Z</h6>
                <div class="flex justify-start gap-3 border-2 rounded-xl w-28 pl-1 text-sm p-[1PX] mt-3">
                    <div class="bg-[#7F7F7F] text-white rounded-full w-8 flex items-center justify-center ">
                        <span>SM</span>
                    </div>
                    <span class="text-gray-500">DM</span>
                    <span class="text-gray-500">LG</span>
                </div>
                <div class="flex items-center gap-[100px] mt-7">
                    <h1 class="text-[#DC2626] text-xl font-bold">$1.99</h1>
                    <button class="bg-[#DC2626] rounded-full h-10 w-10 border border-gray-200">
                        <img class="w-8" src="../images/shopping-basket.png" alt="">
                    </button>
                </div>
            </div>

        </div>
`;

let isGridView = false;

function toggleView() {
    const container = document.querySelector('.card-container');
    console.log("clicked");
    if (isGridView) {
        container.innerHTML = `
            <div class="flex flex-col  gap-8">
                ${cardList.repeat(6)} <!-- repeat 6 times for 6 cards -->
            </div>
        `;
    } else {
        container.innerHTML = `
            <div class="flex flex-col justify-around w-full">
                ${cardGrid.repeat(4)} <!-- repeat 5 times for 5 cards -->
            </div>
        `;
    }
    isGridView = !isGridView;
}

// Select the button and add the event listener
const button = document.getElementById('button');
button.addEventListener('click', toggleView);  // This will toggle between grid and list view