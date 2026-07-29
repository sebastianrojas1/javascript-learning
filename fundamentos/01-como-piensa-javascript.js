const producto = {
  id: 1,
  nombre: "Mouse inalámbrico",
  precio: 25000,
  stock: 10,
};

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