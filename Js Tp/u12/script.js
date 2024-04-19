var frase = prompt("Ingrese una frase: ");
var cont_a = 0, cont_e = 0, cont_i = 0, cont_o = 0, cont_u = 0;

for (let i = 0; i < frase.length; i++) {
    let letra = frase[i].toLowerCase();
    if (letra === 'a') {
        cont_a++;
    } else if (letra === 'e') {
        cont_e++;
    } else if (letra === 'i') {
        cont_i++;
    } else if (letra === 'o') {
        cont_o++;
    } else if (letra === 'u') {
        cont_u++;
    }
}

document.write("La letra 'a' aparece " + cont_a + " veces en la frase.");
document.write("La letra 'e' aparece " + cont_e + " veces en la frase.");
document.write("La letra 'i' aparece " + cont_i + " veces en la frase.");
document.write("La letra 'o' aparece " + cont_o + " veces en la frase.");
document.write("La letra 'u' aparece " + cont_u + " veces en la frase.");
