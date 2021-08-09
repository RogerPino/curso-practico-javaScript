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
