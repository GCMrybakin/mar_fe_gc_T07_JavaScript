//10. Realiza un programa que solicite al usuario ingresar el día de la semana (como número del
//1 al 7) y muestre en la consola el nombre del día correspondiente (por ejemplo, 1
//corresponde a "Lunes", 2 corresponde a "Martes", etc.)

let numero = prompt("Introduce un numero de la semana 1-7");
let dia;

switch (numero) {
    case "1":
    dia = "Lunes";
    break;
    case "2":
    dia = "Martes";
    break;
    case "3":
    dia = "Miercoles";
    break;
    case "4":
    dia = "Jueves";
    break;
    case "5":
    dia = "Viernes";
    break;
    case "6":
    dia = "Sabado";
    break;
    case "7":
    dia = "Domingo";
    break;
}

console.log("El dia de la semana es: "+dia);