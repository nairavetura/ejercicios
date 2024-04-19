var num1 = prompt("Ingrese un número");
var div = [];
for(var i = 1; i <= num1; i++){
  if(num1 % i == 0){
    div.push(i);
  }
}
document.write("Los divisores de "+num1+" son: "+div);