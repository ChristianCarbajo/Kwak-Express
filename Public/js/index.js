function printQuantity() {
  let cart = JSON.parse(localStorage.getItem("cart"))
  if (cart == null) {
    cart = []
  }

  document.querySelector(".header-quantity").innerHTML = cart.length

}

printQuantity()

function sumaTotal() {
  let suma = 0
  let cart = JSON.parse(localStorage.getItem("cart"))
  cart.forEach(element => {
    suma += element.price


  })
  suma = suma.toFixed(2)
  document.querySelector(".total").innerHTML = suma + "€"
  return suma

}
sumaTotal()



export { printQuantity, sumaTotal }




