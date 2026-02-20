const card_container = document.getElementById('card_cont');

async function fetchProducts() {
    try {
        const res = await fetch('https://dummyjson.com/products?limit=3');
        const data = await res.json();

        displayProducts(data.products);
    } catch (err) {
        console.error("API fetch error:", err);
        card_container.innerHTML = `<p class="text-white text-xl">Data load nahi hua 😔</p>`;
    }
}

function displayProducts(products) {
    let cardsHTML = '';

    products.forEach(item => {
        // Original price calculate karo
        const discount = item.discountPercentage;
        const originalPrice = (item.price / (1 - discount / 100)).toFixed(2);
        const savePercent = Math.round(discount);

        // Tags safe tarike se
        const tag1 = item.tags?.[0] || "featured";
        const tag2 = item.tags?.[1] || "";

        cardsHTML += `
        <div class="bg-white shadow-lg rounded-xl overflow-hidden w-80">
            <img class="w-full h-48 object-cover"
                 src="${item.thumbnail || item.images?.[0] || 'https://via.placeholder.com/300'}"
                 alt="${item.title}">
            <div class="p-5">
                <div class="flex gap-2 mb-3 flex-wrap">
                    <p class="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium uppercase">${tag1}</p>
                    ${tag2 ? `<p class="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium uppercase">${tag2}</p>` : ''}
                </div>
                
                <h3 class="text-xl font-bold mb-1">${item.title}</h3>
                
                <div class="flex items-baseline gap-2 mb-1">
                    <p class="text-2xl font-bold">$${item.price.toFixed(2)}</p>
                    <p class="text-sm line-through text-gray-500">$${originalPrice}</p>
                </div>
                
                <p class="text-sm text-green-600 font-medium mb-3">Save ${savePercent}%</p>

                <div class="flex items-center gap-2 mb-4">
                    <span class="text-yellow-400 text-lg">
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-half-line"></i>
                    </span>
                    <span class="text-sm text-gray-500">${item.rating} (${Math.floor(Math.random()*200)+50} reviews)</span>
                </div>

                <button class="w-full py-3 rounded-xl bg-yellow-400 hover:bg-yellow-300 active:scale-95 font-semibold transition">
                    Add to Cart
                </button>
            </div>
        </div>
        `;
    });

    card_container.innerHTML = cardsHTML;
}

fetchProducts();