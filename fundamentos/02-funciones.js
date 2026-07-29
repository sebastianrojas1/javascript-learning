const producto = {
  id: 1,
  nombre: "Mouse inalámbrico",
  precio: 25000,
  stock: 2,
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

function calcularTotalVenta (venta) {
return venta.cantidad * venta.producto.precio ;
}

function mostrarResumenVenta(venta) {
    console.log("\nRESUMEN DE VENTA\n","El cliente:",venta.cliente.nombre,", Producto:",venta.producto.nombre,
    ", Cantidad:",venta.cantidad,", Total:",calcularTotalVenta(venta),", Estado:",venta.estado, "Stock restante:", venta.producto.stock);    
}
/* MI FORMA 
function hayStockSuficiente(venta) {
    return venta.producto.stock - venta.cantidad >= 0;
}
*/ 
// FORMA DEL PROFESOR
function hayStockSuficiente(venta) {
    return venta.producto.stock >= venta.cantidad;
}

function confirmarVenta(venta) {
    if (hayStockSuficiente(venta)) {
        venta.producto.stock -= venta.cantidad;
        venta.estado = "confirmada";
        return true;
    }else {
        venta.estado = "rechazada";
        return false;
    }
}

console.log("\n¿Hay stock suficiente?" , hayStockSuficiente(venta)); 

if (!confirmarVenta(venta)) {
  console.log("No se puede realizar la venta, no hay stock suficiente.");
}
mostrarResumenVenta(venta);

console.log("\n¿Hay stock suficiente?" , hayStockSuficiente(venta)); 
