//17. Crea un programa que solicite al usuario ingresar un número y muestre en la consola todos
//los números pares desde 2 hasta ese número utilizando un bucle `while`.

let numero = prompt("Introduce un numero: ");

let i = 2;
while (i <= numero) {
    if (i % 2 === 0) {
        console.log("El número "+i+" es par.");
    }
    i++;
}