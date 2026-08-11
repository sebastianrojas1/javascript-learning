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

// Esta funcion solo calcula y devuelve un resultado.
// No cambia la venta ni el producto: eso la hace mas facil de probar.
function calcularTotalVenta (venta) {
return venta.cantidad * venta.producto.precio ;
}

// Esta funcion se encarga de presentar datos.
// Separarla del calculo ayuda a no mezclar responsabilidades.
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
// La condicion expresa directamente la regla de negocio: hay stock si stock >= cantidad.
function hayStockSuficiente(venta) {
    return venta.producto.stock >= venta.cantidad;
}

// Esta funcion si modifica estado: descuenta stock y cambia el estado de la venta.
// En codigo profesional conviene que estas funciones tengan nombres muy claros.
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
