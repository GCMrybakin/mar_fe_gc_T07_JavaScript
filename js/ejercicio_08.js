//8. Crea un programa que pida al usuario ingresar tres números y determine cuál es el mayor
//de ellos.

let numero1 = prompt("Introduce un numero: ");

let numero2 = prompt("Introduce un segundo numero: ");

let numero3 = prompt("Introduce un tercer numero: ");

let mayor = numero1;

if (numero2 > mayor) {
    mayor = numero2;
}

if (numero3 > mayor) {
    mayor = numero3;
}
console.log("El mayor número es: " + mayor);