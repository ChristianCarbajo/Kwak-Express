import { products } from "./js/products.js";



let params = (new URL(document.location)).searchParams;
let productId = params.get('id')


let selectedProduct = products.filter(item => item.id == productId)

let cartList = []


const addToCart = (id) => {
    let recoveredData = localStorage.getItem('cart')
    console.log(recoveredData);
    if (recoveredData == null) {
        cartList.push(selectedProduct[0])
        localStorage.setItem('cart', JSON.stringify(cartList))
    } else {
        let data = JSON.parse(recoveredData)
        let newDuck = selectedProduct[0]
        data.push(newDuck)
        localStorage.setItem('cart', JSON.stringify(data))
    }
}

document.querySelector(".sp-main-product-img").src = selectedProduct[0].image
document.querySelector(".sp-main-product-description").innerHTML = `
<p class="sp-main-product-description-directory"><a href="index.html">Inicio</a> / Tienda / Patitos de Goma / ${selectedProduct[0].tipo}</p>
<p class="sp-main-product-description-name">${selectedProduct[0].name}</p>
<div class="sp-main-product-description-quantity"></div>
<p class="sp-main-product-description-price">${selectedProduct[0].price}€</p>
<div class="sp-main-product-description-quantity"></div>
<button class="sp-main-product-description-addToCart">Añadir al carro</button>`

document.querySelector(".sp-main-product-description-addToCart").addEventListener("click", addToCart)



