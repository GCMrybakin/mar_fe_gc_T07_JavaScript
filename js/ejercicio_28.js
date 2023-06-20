//28. Realiza un programa que solicite al usuario ingresar un número y luego muestre en la
//consola si ese número es primo o no utilizando un bucle `for`, una condición `if` y un
//contador de divisores.

let numero = prompt("Introduce un numero: ");
let esPrimo = numero >= 2;

for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
        esPrimo = false;
        break;
    }
}

if (esPrimo) {
    console.log(numero + " es un número primo.");
} else {
    console.log(numero + " no es un número primo.");
}