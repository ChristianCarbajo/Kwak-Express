import { products } from "./products.js";
import { printQuantity, totalSum } from "./index.js";


let params = (new URL(document.location)).searchParams;
let productId = params.get('id')


let selectedProduct = products.filter(item => item.id == productId)

let cartList = []



let newDuck = selectedProduct[0]
const addToCart = () => {
   
    let recoveredData = localStorage.getItem('cart')
    if (!recoveredData) {
        cartList.push(newDuck)
        localStorage.setItem('cart', JSON.stringify(cartList))
    } else {
        let data = JSON.parse(recoveredData)
        data.push(newDuck)
        localStorage.setItem('cart', JSON.stringify(data))
    }
    printQuantity()
    totalSum()
}

document.querySelector(".sp-main-product-img").src = newDuck.image
document.querySelector(".sp-main-product-description").innerHTML = `
<p class="sp-main-product-description-directory"><a href="index.html">Inicio</a> / Tienda / Patitos de Goma / ${selectedProduct[0].tipo}</p>
<p class="sp-main-product-description-name">${newDuck.name}</p>
<div class="sp-main-product-description-quantity"></div>
<p class="sp-main-product-description-price">${newDuck.price}€</p>
<div class="sp-main-product-description-quantity"></div>
<button class="sp-main-product-description-addToCart">Añadir al carro</button>`

document.querySelector(".sp-main-product-description-addToCart").addEventListener("click", addToCart)



var img = document.querySelector(".sp-main-product-description-addToCart");

function playQwak() {
    let audio = new Audio("././sound/Quack sound effect.mp3")
    audio.volume = 0.8
    audio.play();
}

img.addEventListener("click", playQwak)
