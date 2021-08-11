numbers = [2, 2, 2, 5, 4, 4, 4, 2, 5, 1, , 1, 1, 1, 1, 10];

const objNumbers = {};

numbers.map((elemento) => {
  if (objNumbers[elemento]) {
    objNumbers[elemento]++;
  } else {
    objNumbers[elemento] = 1;
  }
});

const ArrayOrdered = Object.entries(objNumbers).sort((elementoA, elementoB) => {
  return elementoA[1] - elementoB[1];
});

const moda = ArrayOrdered[ArrayOrdered.length - 1];
