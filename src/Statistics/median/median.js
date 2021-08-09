lista1 = [2, 4, 8, 2, 9, 7];
lista1 = lista1.sort();
const mitadLista1 = parseInt(lista1.length / 2);
let mediana = 0;
function calcularPromedio(lista) {
  //   let sumaElementos = 0;
  //   for (i = 0; i < lista.length; i++) {
  //     sumaElementos = sumaElementos + lista[i];
  //   }

  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedio = sumaLista / lista.length;
  return promedio;
}
function esPar(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
if (esPar(lista1.length)) {
  elemento1 = lista1[mitadLista1 - 1];
  elemento2 = lista1[mitadLista1];
  mediana = calcularPromedio([elemento1, elemento2]);
} else {
  mediana = lista1[mitadLista1];
}

console.log(elemento1 + " y " + elemento2);
