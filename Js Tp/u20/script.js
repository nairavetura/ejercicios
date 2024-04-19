let cadenas = [];
while (true) {
    let entrada = prompt("Ingrese cadena de texto (o presione 'Cancelar' para salir)");
    if (entrada === null) {
        break;
    }
    cadenas.push(entrada);
}
if (cadenas.length > 0) {
    let resultado = cadenas.join('-');
    document.write("Cadenas concatenadas:", resultado);
} else {
    alert("No se ingresaron cadenas.");
}
