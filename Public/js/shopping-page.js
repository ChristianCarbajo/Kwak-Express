let cart = JSON.parse(localStorage.getItem("cart"))

cart.forEach(element => {
    document.querySelector(".shopping-page-main-products").innerHTML += `
    <div class="shopping-page-main-product">
    <div class="shopping-page-main-product-imgName">
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