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


hero();
categories();