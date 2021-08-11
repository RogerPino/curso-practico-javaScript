lista1 = [2, 5, 1];
lista1Sorted = lista1.sort((a, b) => {
  return a - b;
});
const mitadLista1 = parseInt(lista1Sorted.length / 2);

let mediana = 0;

function calcularPromedio(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedio = sumaLista / lista.length;
  return promedio;
}

function esPar(numero) {
  return numero % 2 === 0;
}

if (esPar(lista1.length)) {
  elemento1 = lista1[mitadLista1 - 1];
  elemento2 = lista1[mitadLista1];
  mediana = calcularPromedio([elemento1, elemento2]);
} else {
  mediana = lista1[mitadLista1];
}
