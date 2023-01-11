
function printQuantity() {
    let quantity = JSON.parse(localStorage.getItem("cart"))
    if (quantity == null) {
        quantity = []
    }

    document.querySelector(".header-quantity").innerHTML =  quantity.length
}

printQuantity()

export { printQuantity }