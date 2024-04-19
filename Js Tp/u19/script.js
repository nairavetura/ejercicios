var nota = prompt("Ingrese su nota");

if (nota >= 0 && nota < 3) {
    document.write("Calificación: Muy deficiente");
} else if (nota >= 3 && nota < 5) {
    document.write("Calificación: Insuficiente");
} else if (nota >= 5 && nota < 6) {
    document.write("Calificación: Suficiente");
} else if (nota >= 6 && nota < 7) {
    document.write("Calificación: Bien");
} else if (nota >= 7 && nota < 9) {
    document.write("Calificación: Notable");
} else if (nota >= 9 && nota <= 10) {
    document.write("Calificación: Sobresaliente");
} else {
    document.write("La nota ingresada no es válida. Por favor, ingrese una nota entre 0 y 10.");
}
