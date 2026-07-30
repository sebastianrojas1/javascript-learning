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


const hayStockSuficiente = (venta) => venta.producto.stock >= venta.cantidad;
function confirmarVenta(venta) {
    if (haystocksuficienteflecha(venta)) {
        venta.producto.stock -= venta.cantidad;
        venta.estado = "confirmada";
        return true;
    }else {
        venta.estado = "rechazada";
        return false;
    }
}
confirmarVenta(venta);

const calcularTotalVenta = (venta) => venta.cantidad * venta.producto.precio;
function mostrarResumenVenta(venta) {
    console.log("\nRESUMEN DE VENTA\n","El cliente:",venta.cliente.nombre,", Producto:",venta.producto.nombre,
    ", Cantidad:",venta.cantidad,", Total:",calculartotalventaflecha(venta),", Estado:",venta.estado, "Stock restante:", venta.producto.stock);    
}
mostrarResumenVenta(venta);

