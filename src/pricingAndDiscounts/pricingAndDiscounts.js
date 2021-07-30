function calcularDescuento(
  price = parseInt(document.getElementById("inputPrice").value),
  discount = parseInt(document.getElementById("inputDiscount").value)
) {
  let finalPrice = (price * (100 - discount)) / 100;
  document.getElementById("lblFinalPrice").innerHTML = finalPrice;
}
