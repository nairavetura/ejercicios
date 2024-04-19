var n1 = prompt("Ingrese el primer número"); 
var n2 = prompt("Ingrese el segundo número");
  var div = [];
  for (var i = 1; i <= n1; i++) {
    if (n1 % i == 0 && n2 % i == 0) {
      div.push(i);
    }
  }
  document.write("Los divisores comunes de " +n1+ " y " +n2+ " son: " +div);