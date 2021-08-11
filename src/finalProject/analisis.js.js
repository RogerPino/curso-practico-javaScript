//Creo un arreglo con solo los salarios, y los organizo de forma ascendente para hallar mediana

const salariosCol = colombia
  .map(({ salary }) => {
    return salary;
  })
  .sort((a, b) => {
    return a - b;
  });

// Reutilizo mi funcion para calcular Promedios
function calcularPromedio(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedio = sumaLista / lista.length;
  return promedio;
}

// Reutiilizo mi funcion para definir si el tamaño de mi arreglo es par
function esPar(lista = []) {
  return lista.length % 2 === 0;
}

// Calculoo la mediana de un arreglo dependiendo de si es par o no
function calcularMedianaSalarios(lista = []) {
  if (esPar(lista)) {
    console.log("Entro");
    mitad1 = lista[parseInt(lista.length / 2) - 1];
    mitad2 = lista[parseInt(lista.length / 2)];
    return calcularPromedio([mitad1, mitad2]);
  } else {
    return (mitad = lista[parseInt(lista.length / 2)]);
  }
}
