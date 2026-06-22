const gridContainerEl = document.querySelector(".product-grid")
const searchBarEl = document.querySelector("#search-bar")


function createProductCard(product){

    const newCardEl = document.createElement("div")
    newCardEl.classList.add("product-card")

    newCardEl.innerHTML = `
    <div class="image-placeholder">
        <img src="${product.thumbnail}" alt="${product.title}">
    </div>
    <h3>${product.title}</h3>
    <p class="price">${product.price} $</p>
    <button>Ajouter au panier</button>`

    gridContainerEl.appendChild(newCardEl)
}
async function fetchProducts() {
    try {
        const response = await fetch("https://dummyjson.com/products");
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            const productList = data.products;
            for (let product of productList) {
            createProductCard(product);
            }
    } catch (error) {
        console.error("Failed to fetch products:", error);
        gridContainerEl.innerHTML = `<p class="error">Impossible de charger les produits. Veuillez réessayer
        plus tard.</p>`;
    }
}

fetchProducts()

searchBarEl.addEventListener("input", function(e) {
    // e.target is the search bar itself
    // .value is the text currently inside of it
    console.log(e.target.value);
});