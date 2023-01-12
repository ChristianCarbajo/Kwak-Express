let cart = JSON.parse(localStorage.getItem("cart"))
function printQuantity() {
    
    if (cart == null) {
        cart= []
    }
    
    document.querySelector(".header-quantity").innerHTML =  cart.length
}

printQuantity()


function sumaTotal () {
    let suma = 0
    cart.forEach(element => { 
      suma += element.price
     
     
    }) 
    document.querySelector(".total").innerHTML = suma + "€"
    return suma 
    
}  
  sumaTotal()    
    


export { printQuantity, sumaTotal }




