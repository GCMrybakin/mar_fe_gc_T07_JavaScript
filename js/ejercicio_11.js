//11. Crea un programa que solicite al usuario ingresar un número y determine si es divisible
//entre 3.

let numero = prompt("Introduce un numero: ");

if (numero % 3 === 0) {
    console.log("El número " + numero + " es divisible entre 3.");
} else {
    console.log("El número " + numero + " no es divisible entre 3.");
}