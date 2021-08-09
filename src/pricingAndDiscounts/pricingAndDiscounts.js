function calcularDescuento(
  price = parseInt(document.getElementById("inputPrice").value),
  discount = parseInt(document.getElementById("inputDiscount").value),
  coupon = document.getElementById("selectCoupon").selectedIndex
) {
  if (isNaN(price)) {
    alert("Ingrese el precio a calcular");
  } else {
    switch (coupon) {
      case 1:
        discount = discount + 15;
        break;
      case 2:
        discount = discount + 25;
        break;
      case 3:
        discount = discount + 50;
        break;
      case 4:
        discount = discount + 60;
        break;
      default:
        discount = discount;
    }

    let finalPrice = (price * (100 - discount)) / 100;
    document.getElementById("lblFinalPrice").innerHTML = `$${finalPrice}`;
  }
}
