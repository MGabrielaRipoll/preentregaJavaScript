// definir funciones para calcular descuento, recargo y cuotas. 
// realizar un cases donde elegir el producto a comprar o un if por el metodo de pago-
let descuento = 15;
let recargo = 10;
let tv = 125000;
let cpu = 250000;
let hthea = 115000;
let consola = 320000;

const Descuento = (a,b) => {
    let efectivo = (a - (a*b)/100);
    return efectivo;
};
const Recargo = (a,b) => {
    let tarjeta = (a + (a*b)/100);
    return tarjeta;
};
const Cuotas = (a,b) => {
    let cuotas = a/b;
    return cuotas;
};
const MedioDePago = (a) => {
    let formaDePago = parseInt(prompt("Gracias por su compra. Elija su medio de pago. Escriba 1 si es efectivo y escriba 2 si es con tarjeta"));
    let efectivo ;
    let tarjeta;
    let cuotas;
    if (formaDePago === 1) {
        efectivo = Descuento (a,descuento);
        alert(`Su pago sera de ${efectivo}`);
    } else {
        tarjeta = Recargo (a,recargo);
        alert(`Su pago sera de ${tarjeta}`);
        cantidadCuotas = parseInt(prompt("Si lo desea puede abonar en 1, 3 o 6 cuotas.  Puede escribir su opcion"));
        while (cantidadCuotas !== 1 && cantidadCuotas !== 3 && cantidadCuotas !==6) {
            alert(`Solo puede acceder a 1, 3, 6 cuotas`);
            cantidadCuotas = parseInt(prompt("Por favor ingrese nuevamente el nummero de cuotas, solo tiene acceso a 1, 3 o 6 cuotas."));
        }        
        cuotas = Cuotas(tarjeta,cantidadCuotas);
        alert(`Su pago en cuotas sera de ${cuotas}`);
    };
};

let producto = parseInt(prompt("Si desea el Televisor escriba 1; Si desea una computadora escriba 2; Si desea un Home Theatre escriba 3 y si desea una consola de video juegos escriba 4; si no desea comprar nada escriba 0"));

while (producto !== 0) {
    switch (producto) {
        case 1:
            MedioDePago(tv);
            break;
        case 2:
            MedioDePago(cpu);
            break;
        case 3:
            MedioDePago(hthea);
            break;
        case 4:
            MedioDePago(consola);
            break;
    };
    producto = parseInt(prompt("Si desea el Televisor escriba 1; Si desea una computadora escriba 2; Si desea un Home Theatre escriba 3 y si desea una consola de video juegos escriba 4; si no desea comprar nada escriba 0"));
};
alert(`Gracias por visitar nuestra pagina`)