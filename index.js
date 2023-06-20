let remera = 7500
let buzo = 12500
let campera = 16500
let pantalon = 11500

let sumaTotal = 0;

let mensajeBienvenida = 'Bienvenido! Por favor seleccione sus productos:\n1. REMERA = $7.500\n2. BUZO = $12.500\n3. CAMPERA = $16.500\n4. PANTALÓN = $11.500';

function saludar() {
    let seleccion = parseInt(prompt(mensajeBienvenida));
    while (isNaN(seleccion) || seleccion < 1 || seleccion > 4) {
        alert('Opción inválida. Por favor, seleccione una opción válida.');
        seleccion = parseInt(prompt(mensajeBienvenida));
    }
    return seleccion;
}

let productoSeleccionado1 = saludar();
let productoSeleccionado2 = saludar();

switch (productoSeleccionado1) {
    case 1:
        sumaTotal += remera;
        break;
    case 2:
        sumaTotal += buzo;
        break;
    case 3:
        sumaTotal += campera;
        break;
    case 4:
        sumaTotal += pantalon;
        break;
}

switch (productoSeleccionado2) {
    case 1:
        sumaTotal += remera;
        break;
    case 2:
        sumaTotal += buzo;
        break;
    case 3:
        sumaTotal += campera;
        break;
    case 4:
        sumaTotal += pantalon;
        break;
}

alert('La suma total de los productos seleccionados es: $' + sumaTotal);