//18. Realiza un programa que solicite al usuario ingresar un número y muestre en la consola la
//suma de todos los números naturales hasta ese número utilizando un bucle `do...while`

let numero = prompt("Introduce un numero: ");

let suma = 0;
let i = 1;

while(i <= numero) {
    suma += i;
    console.log('La suma de los números naturales:', suma);
    i++;
}
