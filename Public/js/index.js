function printQuantity() {
  let cart = JSON.parse(localStorage.getItem("cart"))
  if (!cart) {
    cart = []
  }

  document.querySelector(".header-quantity").innerHTML = cart.length

}

// printQuantity()

function sumaTotal() {
  let suma = 0
  let cart = JSON.parse(localStorage.getItem("cart"))
  
  if (!cart) {
    cart = [];
  } else {
    cart.forEach(element => {
      suma += element.price
    })
  }

  suma = suma.toFixed(2)
  document.querySelector(".total").innerHTML = suma + "€"
  return suma
}
// sumaTotal()

var $ = {
  enabled: false,
  tmp: Array(),
  _konamiCode: Array(65, 66, 39, 37, 39, 37, 40, 40, 38, 38),
  init: function () {
    this.tmp = Array(65, 66, 39, 37, 39, 37, 40, 40, 38, 38);
  },
  RickCode: function (e) {
    if (!this.enabled) {
      var t = this.tmp.pop();
      if ((e.keyCode - t) == 0) {
        if (this.tmp.length == 0) {
          this.enabled = true;
        }
      }
      else {
        this.init();
      }
    }
    else {
      this.action();
    }
  },
  // Cambiamos por nuestra funcionalidad.
  action: function alerta() {
    alert("chikichikichuchu jsdkfj aa pi pu pa yabadabadaba");
    window.location.href = "api-page.html"
  }
}

window.addEventListener("load", () => { $.init() })
window.addEventListener("keydown", (e) => { $.RickCode(e) })


export { printQuantity, sumaTotal }