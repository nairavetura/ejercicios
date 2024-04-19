let frase = prompt("Por favor, introduce una frase");

frase = frase.toLowerCase();

let contador = 0;
for (let i = 0; i < frase.length; i++) {
    if (frase[i] === 'a') {
        contador++;
    }
}

alert("La letra 'a' aparece " + contador + " veces en la frase que has introducido.");
