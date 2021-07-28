/// CUADRADO

function calcularCuadrado(
  ladoCuadrado = document.getElementById("inputLadoCuadrado").value
) {
  let perimetroCuadrado = ladoCuadrado * 4;
  let areaCuadrado = ladoCuadrado * ladoCuadrado;
  ladoCuadrado
    ? (document.getElementById(
        "resultadoCuadrado"
      ).innerHTML = `Perimetro: ${perimetroCuadrado}cm y el área es de: ${areaCuadrado}cm^2`)(
        (document.getElementById("inputLadoCuadrado").value = null)
      )
    : alert("Ingresar un valor");
}

/// TRIANGULO

function calcularTriangulo(
  lado1Triangulo = parseInt(
    document.getElementById("inputLadoTriangulo1").value
  ),
  lado2Triangulo = parseInt(
    document.getElementById("inputLadoTriangulo2").value
  ),
  baseTriangulo = parseInt(document.getElementById("inputBaseTriangulo").value),
  alturaTriangulo = parseInt(
    document.getElementById("inputAlturaTriangulo").value
  )
) {
  let perimetroTriangulo = lado1Triangulo + lado2Triangulo + baseTriangulo;
  let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

  lado1Triangulo && lado2Triangulo && baseTriangulo && alturaTriangulo
    ? (document.getElementById(
        "resultadoTriangulo"
      ).innerHTML = `Perimetro: ${perimetroTriangulo}cm 
    y aea: ${areaTriangulo}cm^2`)
    : /*    (document.getElementById("inputLadoTriangulo1").value = ""),
          (document.getElementById("inputLadoTriangulo2").value = ""),
          (document.getElementById("inputBaseTriangulo").value = ""),
          (document.getElementById("inputAlturaTriangulo").value = "") */
      alert(`Ingrese todos los valores para calcular`);
}

/* console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log(
  `El lado 1 mide :${ladoTriangulo1}cm,
el lado 2 mide :${ladoTriangulo2}cm,
la base mide ${baseTriangulo} y su altura es de ${alturaTriangulo}cm`
);
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perímetro sería igual a :${perimetroTriangulo}cm`);
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`El área sería igual a :${areaTriangulo}cm^2`);
console.groupEnd(); */

/// CIRCULO

function calcularCirculo(
  radioCirculo = parseInt(document.getElementById("inputRadioCirculo").value)
) {
  const piCirculo = Math.PI;

  let diametroCirculo = radioCirculo * 2;
  let circunferenciaCirculo = diametroCirculo * piCirculo;
  let areaCirculo = radioCirculo * radioCirculo * piCirculo;

  radioCirculo
    ? ((document.getElementById(
        "resultadoCirculoDiametro"
      ).innerHTML = `Diametro: ${diametroCirculo}cm`),
      (document.getElementById(
        "resultadoCirculoCircunferencia"
      ).innerHTML = `Circunferencia : ${circunferenciaCirculo}cm^2`),
      (document.getElementById(
        "resultadoCirculoArea"
      ).innerHTML = `Area :${areaCirculo}`),
      (document.getElementById("inputRadioCirculo").value = ""))
    : alert("Ingrese el valor del radio");
}
/* console.group("Circulo");
const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const piCirculo = Math.PI;

console.log(
  `El radio es de :${radioCirculo}cm, 
el diametro es de :${diametroCirculo}cm 
y PI se calculó cómo ${piCirculo}`
);
const circunferenciaCirculo = diametroCirculo * piCirculo;
console.log(`El perímetro sería igual a :${circunferenciaCirculo}cm`);
const areaCirculo = radioCirculo * radioCirculo * 2;
console.log(`El área sería igual a :${areaCirculo}cm^2`);
console.groupEnd(); */

function calcularIsoceles(
  ladoTrianguloIsoceles1 = parseInt(
    document.getElementById("inputLadoTrianguloIsoceles1").value
  ),
  ladoTrianguloIsoceles2 = parseInt(
    document.getElementById("inputLadoTrianguloIsoceles2").value
  ),
  baseTrianguloIsoceles = parseInt(
    document.getElementById("inputBaseTrianguloIsoceles").value
  )
) {
  !ladoTrianguloIsoceles1 || !ladoTrianguloIsoceles2 || !baseTrianguloIsoceles
    ? alert("Para calcular, ingrese todos los valores de su isóceles")
    : ladoTrianguloIsoceles1 == ladoTrianguloIsoceles2
    ? calcularAltura()
    : alert("Ingresar un triangulo isóceles válido");

  function calcularAltura() {
    let baseDividida = baseTrianguloIsoceles / 2;
    let alturaTrianguloIsoceles = Math.sqrt(
      ladoTrianguloIsoceles2 ** 2 - baseDividida ** 2 / 4
    );
    alert(`La altura de su isoceles es de ${alturaTrianguloIsoceles}`);
    document.getElementById("inputLadoTrianguloIsoceles1").innerHTML = NULL;
    document.getElementById("inputLadoTrianguloIsoceles2").innerHTML = NULL;
    document.getElementById("inputBaseTrianguloIsoceles").innerHTML = NULL;
  }
  /*  ladoTrianguloIsoceles1 && ladoTrianguloIsoceles2 && baseTrianguloIsoceles ?  
    (
      ladoTrianguloIsoceles1 == ladoTrianguloIsoceles2 ?
    (
      let baseDividida = baseTrianguloIsoceles / 2;
      let alturaTrianguloIsoceles = Math.sqrt(
      ladoTrianguloIsoceles2 ** 2 - baseDividida ** 2 / 4
    );
    alert(`La altura de su isoceles es de ${alturaTrianguloIsoceles}`);
    document.getElementById("inputLadoTrianguloIsoceles1").innerHTML = NULL;
    document.getElementById("inputLadoTrianguloIsoceles2").innerHTML = NULL;
    document.getElementById("inputBaseTrianguloIsoceles").innerHTML = NULL;
    )
  : alert("Ingrese un Triangulo isoceles válido");
  } ) :  */
}
