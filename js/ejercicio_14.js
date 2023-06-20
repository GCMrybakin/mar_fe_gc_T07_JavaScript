//14. Crea un programa que solicite al usuario ingresar un número del 1 al 12 y muestre en la
//consola el nombre del mes correspondiente (por ejemplo, 1 corresponde a "Enero", 2
//corresponde a "Febrero", etc.).

let numero = prompt("Introduce un numero (1-12): ");
let mes;

switch (numero) {
    case "1":
    mes = "Enero";
    break;
    case "2":
    mes = "Febrero";
    break;
    case "3":
    mes = "Marzo";
    break;
    case "4":
    mes = "Abril";
    break;
    case "5":
    mes = "Mayo";
    break;
    case "6":
    mes = "Junio";
    break;
    case "7":
    mes = "Julio";
    break;
    case "8":
    mes = "Agosto";
    break;
    case "9":
    mes = "Septiembre";
    break;
    case "10":
    mes = "Octubre";
    break;
    case "11":
    mes = "Noviembre";
    break;
    case "12":
    mes = "Diciembre";
    break;
}

console.log("El mes del año es: "+mes);