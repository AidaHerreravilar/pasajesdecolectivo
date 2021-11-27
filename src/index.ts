//Se necesita vender los pasajes de un colectivo. El colectivo tiene 20 filas de 3
//butacas cada uno
//Por convención se pone un 0 en el asiento libre y un 1 en el ya vendido.
//Cuando los pasajes se ponen a la venta están todos los asientos libres
//Cuando una persona quiere comprar se muestra los lugares desocupados y se le
// asigna un asiento elegido por el pasajero
let fila: number[] = new Array(2);
let butacas: number[] = new Array(3);
let asientosvendidos: number[] = new Array();
let asientosnovendidos: number[] = new Array();
let cantidad: number;
cantidad = 0;

for (let index = 0; index < fila.length; index++) {
  for (let index = 0; index < butacas.length; index++) {
    asientosvendidos[index] = Number(
      prompt("ingrese cantidad de asientos que va a comprar")
    );
    cantidad = asientosnovendidos[index];
  }
}
console.log(asientosvendidos);
