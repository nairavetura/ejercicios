const contarVocales = frase => {

    const vocales = "aeiou";
    let cantidadVocales = 0;
    for (const letra of frase) {
        if (vocales.includes(letra.toLowerCase())) {
            cantidadVocales++;
        }
    }
    return cantidadVocales;
}

const fraseUsuario = prompt("Ingresa una frase: ");

const cantidadVocales = contarVocales(fraseUsuario);
document.write("La cantidad de vocales en la frase son: " + cantidadVocales);
