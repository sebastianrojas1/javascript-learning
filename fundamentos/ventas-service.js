export function crearResumenVenta(venta, clientes, productos) {
  const cliente = clientes.find((cliente) => cliente.id === venta.clienteId);
  const producto = productos.find((producto) => producto.id === venta.productoId);

  const total = venta.cantidad * producto.precio;

  return {
    ventaId: venta.id,
    clienteNombre: cliente.nombre,
    productoNombre: producto.nombre,
    cantidad: venta.cantidad,
    total,
    estado: venta.estado,
  };
}