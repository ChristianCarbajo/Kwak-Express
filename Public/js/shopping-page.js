import { printQuantity } from "./index.js";

let cart = JSON.parse(localStorage.getItem("cart"))



function printCart() {
    if (!cart || cart == []) {
        document.querySelector(".shopping-page-main-products").innerHTML += `
    <div class="shopping-page-main-product">
    <div class="shopping-page-main-product-imgName">
        <p class="shopping-page-main-nav-product">No Hay ningún producto</p>
    </div>
    <div class="shopping-page-main-product-elements">
        
    </div>
    </div>`
    } else {
        cart.forEach((element, id) => {
            document.querySelector(".shopping-page-main-products").innerHTML += `
        <div class="shopping-page-main-product">
        <div class="shopping-page-main-product-imgName">
        <div class="shopping-page-main-product-imgName-close id${id}"><p>x</p></div>
        <img src=${element.image} alt="">
        <p class="shopping-page-main-nav-product">${element.name}</p>
        </div>
        <div class="shopping-page-main-product-elements">
        <p>${element.price}</p>
        <p>Cantidad</p>
        <p>Subtotal</p>
        </div>
        </div>`
     
        });
        let sumaTotal=0
         cart.forEach(function (a){sumaTotal +=a.price
        });
        document.querySelector(".shopping-page-main-products").innerHTML += `
        <p class="shopping-page-main-product-TOTAL">TOTAL:${sumaTotal}€</p>`
        cart.forEach((item, id) => {
            document.querySelector(`.id${id}`).addEventListener("click", () => { removeItem(id) })
           
        });
        
    
    }
}
printCart()
function removeItem(id) {
    cart.splice(id, 1)
    document.querySelector(".shopping-page-main-products").innerHTML = ''
    localStorage.setItem("cart", JSON.stringify(cart))
    printCart()
    
}


