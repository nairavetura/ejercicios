let num1 = prompt("Ingrese un número");
if (num1 % 2 === 0 || num1 % 3 === 0 || num1 % 5 === 0 || num1 % 7 === 0) {
if (num1 % 2 === 0) {
alert("Es divisible por 2. ");
}
if (num1 % 3 === 0) {
alert("Es divisible por 3. ");
}
if (num1 % 5 === 0) {
alert("Es divisible por 5. ");
}
if (num1 % 7 === 0) {
alert("Es divisible por 7. ");
}
} else {
alert("No es divisible ni por 2, ni por 3, ni por 5, ni por 7");
}