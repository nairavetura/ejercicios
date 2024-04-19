var frase = prompt("Por favor, ingrese una frase:");

frase = frase.toLowerCase();

var vocalesEncontradas = "";

for (var i = 0; i < frase.length; i++) {
    var caracter = frase[i];
    if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
        
        if (!vocalesEncontradas.includes(caracter)) {
            vocalesEncontradas += caracter + ", ";
        }
    }
}

if (vocalesEncontradas.length > 0) {
    vocalesEncontradas = vocalesEncontradas.slice(0, -2);
}

document.write("Las vocales que aparecen en la frase son: " + vocalesEncontradas);
