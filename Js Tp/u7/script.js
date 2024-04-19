var num1 = (prompt("Ingrese el primer número: "));
var num2 = (prompt("Ingrese el segundo número: "));
var num3 = (prompt("Ingrese el tercer número: "));

if (num1 > num2 && num1 > num3) {
  document.write(num1);
} else if (num2 > num3) {
  document.write(num2);
} else {
  document.write(num3);
}  