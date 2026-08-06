const productoOriginal = {
  id: 1,
  nombre: "Mouse inalámbrico",
  precio: 25000,
  stock: 10,
};
const productos = [
  { id: 1, nombre: "Mouse inalámbrico", precio: 25000, stock: 10 },
  { id: 2, nombre: "Teclado mecánico", precio: 45000, stock: 5 },
];
const productoCopia = { ...productoOriginal };

/*
const productoCopiaMal = productoOriginal;
productoCopiaMal.stock = 5;
console.log("Stock original:", productoOriginal.stock);
console.log("Stock copia:", productoCopiaMal.stock);
*/

console.log("Stock original:", productoOriginal.stock);
console.log("Stock copia instantánea:", productoCopia.stock);
//Modificar una propiedad en la copia sin afectar al original
const productoActualizado = {
  ...productoOriginal,
  precio: 30000,
};
console.log("Producto original:", productoOriginal);
console.log("Producto actualizado:", productoActualizado);
//Agregar una nueva propiedad al objeto original sin modificarlo
const productoConDescuento={...productoOriginal, descuento:10};
console.log("Producto con descuento:", productoConDescuento);
//Agregar un nuevo producto al array de productos sin modificar el array original
const nuevoProducto = {
  id: 3,
  nombre: "Monitor 24 pulgadas",
  precio: 180000,
  stock: 3,
};
const productosActualizados = [...productos, nuevoProducto];
console.log("Productos originales:", productos);
console.log("Productos actualizados:", productosActualizados);
/* ACA MODIFICO SOLO UN PRODUCTO DEL ARRAY
const productosConStockActuzalizado = [productos.filter((producto) => producto.id === 2).map((producto) => ({ ...producto, stock: 10 })) ];
console.log("Productos con stock actualizado:", productosConStockActuzalizado);
*/
//Aca tambien modifico solo un producto del array pero guardo el resultado en un nuevo array
const productosConStockActualizado = productos.map((producto) => {
  if (producto.id === 2) {
    return {
      ...producto,
      stock: 10,
    };
  }

  return producto;
});

console.log("Productos originales:", productos);
console.log("Productos con stock actualizado:", productosConStockActualizado);