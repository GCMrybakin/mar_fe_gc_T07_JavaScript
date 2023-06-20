//32. Escribe un programa que solicite al usuario ingresar un número y luego calcule el factorial
//de ese número utilizando un bucle `for`, una condición `if` y una variable acumuladora.

let numero = prompt("Introduce un numero: ");
let total = 1;

for (i = 0; i < numero; i++){
    total=total * (numero - i);
}

console.log(numero + '! = ' + total);