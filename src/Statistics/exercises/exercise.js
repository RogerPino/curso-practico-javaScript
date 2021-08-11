lista1 = [5, 5, 5, 2];
lista2 = [1, 2, 2, 5];
valorNumerador = [];

function calcularPromedioPonderado(listaNotas, listaPonderados) {
  // ------- SOLUCION 1
  //   for (i = 0; i < listaNotas.length; i++) {
  //     valorNumerador[i] = listaNotas[i] * listaPonderados[i];
  //   }
  //   const sumaNumerador = valorNumerador.reduce((a = 0, b) => {
  //     return a + b;
  //   });
  //   const sumaDenominador = listaPonderados.reduce((a = 0, b) => {
  //     return a + b;
  //   });
  //   return sumaNumerador / sumaDenominador;

  // ------- SOLUCION 2
  const sumaNotas = listaNotas
    .map((nota, index) => {
      return nota * listaPonderados[index];
    })
    .reduce((a = 0, b) => a + b);

  let totalPonderado = 0;
  listaPonderados.forEach((a) => {
    totalPonderado = totalPonderado + a;
  });
  const notaFinal = sumaNotas / totalPonderado;
  return notaFinal;
}
