let letras = 'TRWAGMYFPDXBNJZSQVHLCKE';

while (true) {
  let numero = prompt("Introduce el número de DNI");
  if (numero === null) {
      break;
  }
  numero = parseInt(numero, 10);

  if (isNaN(numero)) {
      alert("Lo introducido no es un número.");
  } else if (numero < 0 || numero > 99999999) {
      alert("El número de DNI debe estar entre 0 y 99999999.");
  } else {
      let resto = numero % 23;
      let letra = letras.charAt(resto);
      document.write("La letra del DNI es: " + letra);
  }
}