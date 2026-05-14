const gridContainerEl = document.querySelector(".product-grid")
const searchBarEl = document.querySelector("#search-bar")


function createProductCard(product){

    const newCardEl = document.createElement("div")
    newCardEl.classList.add("product-card")

    newCardEl.innerHTML = `
    <div class="image-placeholder">
        <img src="${product.thumbnail}">
    </div>
    <h3>${product.title}</h3>
    <p class="price">${product.price} $</p>
    <button>Ajouter au panier</button>`

    gridContainerEl.appendChild(newCardEl)
}

async function fetchProducts(){
    const products = await fetch("https://dummyjson.com/products")
    const data = await products.json()
    const productList = data.products
    for(let product of productList){
        createProductCard(product)
    }
}

fetchProducts()

searchBarEl.addEventListener("input", console.log())
