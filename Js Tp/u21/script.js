var sum = 0;
do {
    var num = prompt("Ingrese numero");
    if (Number(num) == num) {
        num = Number(num);
        sum = sum + num;
    }
    else {
        if (num != undefined) {
            alert(num + " No es un numero");
        }
    }
} while (num != undefined);
document.write(sum);