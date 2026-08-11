// Un objeto agrupa datos relacionados. En este proyecto, producto, cliente y venta
// funcionan como las primeras "entidades" del sistema.
const producto = {
  id: 1,
  nombre: "Mouse inalámbrico",
  precio: 25000,
  stock: 10,
};

const cliente = {
  id: 1,
  nombre: "juan",
  email: "juan@gmail.com",
  telefono: "+54 11 5564-2603",
}

const venta = {
  id: 1,
  cliente,
  producto,
  cantidad: 2,
  total: 0,
  estado: "pendiente",
}
/*
console.log("Producto inicial:");
console.log(producto);

producto.precio = 27000;
producto.stock = producto.stock - 1;

console.log("Producto actualizado:");
console.log(producto);

let totalVenta = 0;

totalVenta = totalVenta + producto.precio;

console.log("Total de la venta:");
console.log(totalVenta);
*/
// venta.producto.precio accede a un objeto dentro de otro objeto.
// En JavaScript se navegan propiedades con punto, parecido a C#.
venta.total = venta.cantidad * venta.producto.precio;

console.log("El cliente: ");
console.log(venta.cliente.nombre);
console.log("adquirio producto: ");
console.log(venta.producto.nombre);
console.log("la venta queda impresa como: ");
console.log("cantidad= ", venta.cantidad, "valor: ",venta.total, "estado: ", venta.estado);
