const producto = {
  id: 1,
  nombre: "Mouse inalámbrico",
  precio: 25000,
  stock: 10,
};

const cliente = {
  id: 1,
  nombre: "Juan",
  email: "juan@gmail.com",
  telefono: "+54 11 5564-2603",
}

const venta = {
  id: 1,
  cliente,
  producto,
  cantidad: 2,
  estado: "pendiente",
}
/*
function calcularTotalVenta (venta) {
return venta.cantidad * venta.producto.precio ;
}

function hayStockSuficiente(venta) {
    return venta.producto.stock >= venta.cantidad;
}
*/


// Funcion flecha con retorno implicito: util para expresiones cortas.
// Equivale a una funcion que devuelve true o false segun la comparacion.
const hayStockSuficiente = (venta) => venta.producto.stock >= venta.cantidad;
/*function confirmarVenta(venta) {
    if (haystocksuficienteflecha(venta)) {
        venta.producto.stock -= venta.cantidad;
        venta.estado = "confirmada";
        return true;
    }else {
        venta.estado = "rechazada";
        return false;
    }
}*/
//GUARD CLAUSE
// Guard clause: primero se resuelve el caso que corta el flujo.
// Esto evita anidar demasiado los if y deja el caso principal mas legible.
function confirmarVenta(venta) {
  if (!hayStockSuficiente(venta)) {
    venta.estado = "rechazada";
    return false;
  }

  venta.producto.stock -= venta.cantidad;
  venta.estado = "confirmada";
  return true;
}
confirmarVenta(venta);

// Otra funcion flecha con retorno implicito: recibe una venta y devuelve el total.
const calcularTotalVenta = (venta) => venta.cantidad * venta.producto.precio;
function mostrarResumenVenta(venta) {
    console.log("\nRESUMEN DE VENTA\n","El cliente:",venta.cliente.nombre,", Producto:",venta.producto.nombre,
    ", Cantidad:",venta.cantidad,", Total:",calcularTotalVenta(venta),", Estado:",venta.estado, "Stock restante:", venta.producto.stock);    
}
mostrarResumenVenta(venta);

