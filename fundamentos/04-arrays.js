const productos = [
  {
    id: 1,
    nombre: "Mouse inalámbrico",
    precio: 25000,
    stock: 10,
  },
  {
    id: 2,
    nombre: "Teclado mecánico",
    precio: 45000,
    stock: 5,
  },
  {
    id: 3,
    nombre: "Monitor 24 pulgadas",
    precio: 180000,
    stock: 3,
  },
];
const clientes = [
  {
    id: 1,
    nombre: "Juan",
    email: "juan@gmail.com",
    telefono: "+54 11 5564-2603",
  },
  {
    id: 2,
    nombre: "Ana",
    email: "ana@gmail.com",
    telefono: "+54 11 4123-8899",
  },
  {
    id: 3,
    nombre: "Carlos",
    email: "carlos@gmail.com",
    telefono: "+54 11 4987-2211",
  },
];
const ventas = [
  {
    id: 1,
    clienteId: 1,
    productoId: 1,
    cantidad: 2,
    estado: "pendiente",
  },
  {
    id: 2,
    clienteId: 2,
    productoId: 2,
    cantidad: 1,
    estado: "pendiente",
  },
  {
    id: 3,
    clienteId: 3,
    productoId: 3,
    cantidad: 4,
    estado: "pendiente",
  },
];

/*console.log("Primer producto:", productos[0]);
console.log("Nombre del primer producto:", productos[0].nombre);
console.log("Precio del segundo producto:", productos[1].precio);
console.log("Stock del tercer producto:", productos[2].stock);
console.log("Primera venta:", ventas[0]);
const productoEncontrado = productos.find(producto=>producto.id === 2);
console.log("Producto encontrado con id 2:", productoEncontrado);*/

const ventaEncontrada = ventas.find(venta=>venta.id === 1);
const clienteDeLaVenta = clientes.find(cliente=>cliente.id === ventaEncontrada.clienteId);
const productoDeLaVenta = productos.find(producto=>producto.id === ventaEncontrada.productoId);

const totalVenta = (venta, producto) => venta.cantidad * producto.precio;
function mostrarResumenVenta(venta, cliente, producto) {
  console.log(
    "\nRESUMEN DE VENTA\n",
    "VentaId:",
    venta.id,
    "El cliente:",
    cliente.nombre,
    ", Producto:",
    producto.nombre,
    ", Cantidad:",
    venta.cantidad,
    ", Total:",
    totalVenta(venta, producto),
    ", Estado:",
    venta.estado,
    "Stock restante:",
    producto.stock
  );
}
mostrarResumenVenta(ventaEncontrada);