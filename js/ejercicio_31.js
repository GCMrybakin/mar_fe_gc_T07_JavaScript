//31. Realiza un programa que solicite al usuario ingresar un número y luego muestre en la
//consola todos los números primos desde 1 hasta ese número utilizando un bucle `for`, una
//condición `if` y una función auxiliar para verificar si un número es primo.

function esPrimo(num) {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
        return false;
        }
    }

    return true;
}

let numero = prompt("Introduce un número");

for (let i = 1; i <= numero; i++) {
    if (esPrimo(i)) {
        console.log(i);
    }
}
