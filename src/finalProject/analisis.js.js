let medianaGeneralSalario = 0;
let medianaTop10Salario = 0;

////////////// UTILS ////////////////////

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
//Creo un arreglo con solo los salarios, y los organizo de forma ascendente para hallar mediana
const salariosCol = colombia
  .map(({ salary }) => {
    return salary;
  })
  .sort((a, b) => {
    return a - b;
  });

// Calculoo la mediana de un arreglo dependiendo de si es par o no
function calcularMedianaSalarios(lista = []) {
  if (esPar(lista)) {
    mitad1 = lista[parseInt(lista.length / 2) - 1];
    mitad2 = lista[parseInt(lista.length / 2)];
    medianaGeneralSalario = calcularPromedio([mitad1, mitad2]);
  } else {
    medianaGeneralSalario = mitad = lista[parseInt(lista.length / 2)];
  }
  return medianaGeneralSalario;
}

// Calculo la mediana del 10% de un arreglo

function calcularMedianaTop10Salarios(lista = []) {
  const spliceStart = (lista.length * 90) / 100;
  const spliceCount = lista.length - spliceStart;
  const salariosTop10 = lista.splice(spliceStart, spliceCount);
  console.log(`La mediana del top 10 de salarios es de ${medianaTop10Salario}`);
  medianaTop10Salario = calcularMedianaSalarios(salariosTop10);
  return medianaTop10Salario;
}
