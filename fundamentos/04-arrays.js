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
    estado: "confirmada",
  },
  {
    id: 3,
    clienteId: 3,
    productoId: 3,
    cantidad: 4,
    estado: "rechazada",
  },
  {
    id: 4,
    clienteId: 1,
    productoId: 2,
    cantidad: 1,
    estado: "pendiente",
  },
  {
    id: 5,
    clienteId: 2,
    productoId: 1,
    cantidad: 3,
    estado: "confirmada",
  },
];

/*console.log("Primer producto:", productos[0]);
console.log("Nombre del primer producto:", productos[0].nombre);
console.log("Precio del segundo producto:", productos[1].precio);
console.log("Stock del tercer producto:", productos[2].stock);
console.log("Primera venta:", ventas[0]);
const productoEncontrado = productos.find(producto=>producto.id === 2);
console.log("Producto encontrado con id 2:", productoEncontrado);*/

//FUNCION FIND
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
mostrarResumenVenta(ventaEncontrada, clienteDeLaVenta, productoDeLaVenta);

//FUNCION FILTER
const ventasPendientes = ventas.filter(venta=>venta.estado === "pendiente");
const ventasConfirmadas = ventas.filter(venta=>venta.estado === "confirmada");
const ventasRechazadas = ventas.filter(venta=>venta.estado==="rechazada");
console.log("\nVentas pendientes:", ventasPendientes.length);
console.log(ventasPendientes);

console.log("\nVentas confirmadas:", ventasConfirmadas.length);
console.log(ventasConfirmadas);

console.log("\nVentas rechazadas:", ventasRechazadas.length);
console.log(ventasRechazadas);

//FUNCION MAP
const nombresProductos = productos.map(producto=>producto.nombre);
console.log("\nNombres de productos:", nombresProductos);
const preciosProductos = productos.map(producto=>producto.precio);
console.log("\nPrecios de productos:", preciosProductos);
const stockProductos = productos.map(producto=>producto.stock);
console.log("\nStock de productos:", stockProductos);

const resumenVentas = ventas.map(venta=>{
  const cliente = clientes.find(cliente=>cliente.id === venta.clienteId);
  const producto = productos.find(producto=>producto.id === venta.productoId); 
  const total = totalVenta(venta, producto); 
  return {
    ventaId: venta.id,
    clienteNombre: cliente.nombre,
    productoNombre: producto.nombre,
    ventaCantidad: venta.cantidad,
    total: total,
    ventaEstado: venta.estado,
  };
});
console.log("\nResumenes de ventas:", resumenVentas);

//FUNCION REDUCE
const totalGeneralVentas = resumenVentas.reduce((acumulador, venta)=> acumulador + venta.total, 0);
console.log("\nTotal general de ventas:", totalGeneralVentas);

const ventasConfirmadasResumen = resumenVentas.filter(venta => venta.ventaEstado === "confirmada");
const totalVentasConfirmadas = ventasConfirmadasResumen.reduce((acumulador, venta)=> acumulador + venta.total, 0);
console.log("\nTotal de ventas confirmadas:", totalVentasConfirmadas);

//FUNCION ENCADENADA
const totalVentasPendientes = resumenVentas.filter(venta=>venta.ventaEstado === "pendiente").reduce((acumulador, venta)=> acumulador + venta.total, 0);
console.log("\nTotal de ventas pendientes:", totalVentasPendientes);

//FUNCION SOME
const hayVentasRechazadas = resumenVentas.some(venta=>venta.ventaEstado === "rechazada");
console.log("\n¿Hay ventas rechazadas?", hayVentasRechazadas);

//FUNCION EVERY
const todosLosProductosTienenStock = productos.every(producto=>producto.stock > 0);
console.log("\n¿Todos los productos tienen stock?", todosLosProductosTienenStock);

//FUNCION INCLUDES
const estadosValidos = ["pendiente", "confirmada", "rechazada"];
const estadoVentaEsValido = estadosValidos.includes(ventas[0].estado);
console.log("\n¿El estado de la primera venta es válido?", estadoVentaEsValido);

// FUNCION FOREACH
console.log("\nListado de resumenes de ventas:");

resumenVentas.forEach((venta) => {
  console.log(
    `Venta ${venta.ventaId} - ${venta.clienteNombre} compró ${venta.productoNombre} por ${venta.total} - Estado: ${venta.ventaEstado}`
  );
});

// FUNCION SORT

const ventasOrdenadasPorTotalDesc = [...resumenVentas].sort(
  (a, b) => b.total - a.total
);

console.log("\nVentas ordenadas por total de mayor a menor:");
console.log(ventasOrdenadasPorTotalDesc);

const ventasOrdenadasPorTotalAsc = [...resumenVentas].sort(
  (a, b) => a.total - b.total
);

console.log("\nVentas ordenadas por total de menor a mayor:");
console.log(ventasOrdenadasPorTotalAsc);

const ventasOrdenadasPorCliente = [...resumenVentas].sort((a, b) =>
  a.clienteNombre.localeCompare(b.clienteNombre)
);

console.log("\nVentas ordenadas por cliente:");
console.log(ventasOrdenadasPorCliente);