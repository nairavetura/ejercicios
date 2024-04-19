let mult4, mult9;

for (let i = 1; i <= 500; i++) {
    let linea = i.toString();
    mult4 = (i % 4 === 0) ? " Multiplo de 4 " : "";
    mult9 = (i % 9 === 0) ? " Multiplo de 9 " : "";
    linea += mult4 + mult9;
    document.write(linea + "<br>");

    if (i % 5 === 0 && i !== 500) {
        document.write("——————————————————————————<br>");
    }
}