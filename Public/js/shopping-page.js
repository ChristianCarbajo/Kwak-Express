import { printQuantity, sumaTotal } from "./index.js";

let cart = JSON.parse(localStorage.getItem("cart"))



function printCart() {
    if (cart == []) {
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
        <p>${element.price}€</p>
        </div>
        </div>`

        });

        let suma = 0
        suma = sumaTotal()

        document.querySelector(".shopping-page-main-products").innerHTML += `
        <p class="shopping-page-main-product-TOTAL">TOTAL:${suma}€</p>`


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
    printQuantity()

}



let buy = document.querySelector("#btn-add")
let phoneNumber = 34602179499

function buyWhatsapp(params) {
    let names = "";
    let totalPrice = 0;
    totalPrice = sumaTotal();
    cart.forEach((element, id) => {
        if(id+1 == cart.length){
            names += element.name + " "
        } else{
            names += element.name + ", "
        }
    });

    window.open("https://api.whatsapp.com/send/?phone=" + phoneNumber + "&text=" + "Productos: " + names + " - " + "Precio total =" + totalPrice + "&app_absent=0");
    
}


buy.addEventListener("click", buyWhatsapp)