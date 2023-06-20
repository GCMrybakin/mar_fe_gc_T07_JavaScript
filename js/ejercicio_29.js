//29. Escribe un programa que solicite al usuario ingresar una palabra y luego cuente y muestre
//en la consola la cantidad de vocales que tiene la palabra utilizando un bucle `for`, una
//condición `if` y una variable contador.

let palabra = prompt("Introduce una palabra");

let contador  = 0;

for(let c = 0; c <= palabra.length;c++){
    if (palabra[c] === "a" || palabra[c] === "e" || palabra[c] === "i" || palabra[c] === "o" || palabra[c] === "u") {
        contador++;
    }
}

console.log("Cantidad de vocales en total: "+contador);