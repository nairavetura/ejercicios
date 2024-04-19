var numrep = prompt("Ingrese un numero para construir la piramide a la inversa");
if (Number(numrep) == numrep) {
 
    if (numrep > 0 && numrep <= 50) {
        var rep,i;
        for (i = numrep; i >= 1; i--) {
            for (rep = i; rep >= 1; rep--) {
                document.write(i);
            }
            document.write("<br>");
        }
    } 
    else {
        alert("El número ingresado no es válido");
    }
} 
else {
    alert("No has ingresado un número");
}