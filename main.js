let plato1 = "CAUSA";
let plato2 = "CEVICHE";
let plato3 = "JALEA";
let plato4 = "PULPO AL OLIVO";

function platoElegido(nombrePlatillo) {
    nombrePlatillo = nombrePlatillo.toUpperCase(); 
    if (nombrePlatillo === plato1 || nombrePlatillo === plato2 || nombrePlatillo === plato4) {
        alert("Ha añadido el plato " + nombrePlatillo + " al carrito.");
    } else if (nombrePlatillo === plato3) {
        let confirmacion = confirm("El plato elegido contiene mariscos, ¿desea continuar con el pedido?");
        if (confirmacion) {
            alert("Ha añadido el plato " + nombrePlatillo + " al carrito.");
        } else {
            alert("No ha añadido ningún plato al carrito.");
        }
    } else {
        alert("Ese platillo no se encuentra en la carta.");
    }
}

let nombrePlatillo = prompt("Ingrese el nombre del plato que desea agregar al carrito");
platoElegido(nombrePlatillo);




// if(nombrePlatillo.toLowerCase() === plato1 || nombrePlatillo.toLowerCase() === plato2 || nombrePlatillo.toLowerCase() === plato3 || nombrePlatillo.toLowerCase() === plato4) {
//     alert("Ha anadido el plato " + nombrePlatillo + " al carrito.")
// } else {
//     alert("Ese platillo no se encuentra en la carta.");
// }




