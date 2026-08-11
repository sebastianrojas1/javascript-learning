// Spread copia las propiedades de un objeto en otro objeto nuevo.
// Ojo: es una copia superficial; los objetos anidados requieren copiarse aparte.
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
Si se asigna un objeto directo a otra variable, ambas variables apuntan al mismo objeto.
En ese caso, cambiar la "copia" tambien cambia el original.
const productoCopiaMal = productoOriginal;
productoCopiaMal.stock = 5;
console.log("Stock original:", productoOriginal.stock);
console.log("Stock copia:", productoCopiaMal.stock);
*/

console.log("Stock original:", productoOriginal.stock);
console.log("Stock copia instantánea:", productoCopia.stock);
//Modificar una propiedad en la copia sin afectar al original
// El orden importa: precio pisa el precio que venia dentro de productoOriginal.
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
// En arrays, spread permite crear un array nuevo agregando elementos.
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
Esta forma mezcla filter y map y termina devolviendo una estructura menos practica.
Para actualizar un elemento puntual, map sobre todo el array suele ser mas claro.
const productosConStockActuzalizado = [productos.filter((producto) => producto.id === 2).map((producto) => ({ ...producto, stock: 10 })) ];
console.log("Productos con stock actualizado:", productosConStockActuzalizado);
*/
//Aca tambien modifico solo un producto del array pero guardo el resultado en un nuevo array
// Si el producto es el buscado, se devuelve una copia modificada; si no, se devuelve igual.
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
//Elimino un producto del array sin modificar el array original
// filter no borra del array original: crea otro array sin el elemento filtrado.
const productosSinTeclado = productos.filter((producto)=> producto.id !==2);
//Combinacion de arrays
// Spread tambien sirve para combinar varios arrays en uno nuevo.
const productosSucursalA = [
  { id: 1, nombre: "Mouse inalámbrico", precio: 25000, stock: 10 },
  { id: 2, nombre: "Teclado mecánico", precio: 45000, stock: 5 },
];

const productosSucursalB = [
  { id: 3, nombre: "Monitor 24 pulgadas", precio: 180000, stock: 3 },
  { id: 4, nombre: "Notebook", precio: 900000, stock: 2 },
];
const todosLosProductos = [
  ...productosSucursalA,
  ...productosSucursalB,
];
console.log("Productos sucursal A:", productosSucursalA);
console.log("Productos sucursal B:", productosSucursalB);
console.log("Todos los productos:", todosLosProductos);
//Modificacion de un producto en un array anidado a un objeto
// Para actualizar un objeto anidado sin mutar el original se copia cada nivel necesario.
const venta = {
  id: 1,
  cantidad: 2,
  estado: "pendiente",
  producto: {
    id: 1,
    nombre: "Mouse inalámbrico",
    precio: 25000,
    stock: 10,
  },
};
const ventaConProductoActualizado = {
  ...venta,
  producto: {
    ...venta.producto,
    stock: 8,
  },
};
console.log("Venta original:", venta);
console.log("Venta con producto actualizado:", ventaConProductoActualizado);

const ventaConfirmadaConStockActualizado = {...venta,estado:"confirmada",
                                  producto:{...venta.producto, stock: 8}};  
console.log("Venta original:", venta);
console.log("Venta confirmada con stock actualizado:", ventaConfirmadaConStockActualizado);
/*
// Copiar objeto
const copiaProducto = { ...productoOriginal };

// Copiar objeto y actualizar propiedad
const productoActualizado = {
  ...productoOriginal,
  precio: 30000,
};

// Copiar objeto y agregar propiedad
const productoConDescuento = {
  ...productoOriginal,
  descuento: 10,
};

// Agregar elemento al final de un array
const productosActualizados = [...productos, nuevoProducto];

// Agregar elemento al inicio de un array
const productosConNuevoAlInicio = [nuevoProducto, ...productos];

// Combinar arrays
const todosLosProductos = [
  ...productosSucursalA,
  ...productosSucursalB,
];

// Actualizar un objeto dentro de un array
const productosConStockActualizado = productos.map((producto) => {
  if (producto.id === 2) {
    return {
      ...producto,
      stock: 10,
    };
  }

  return producto;
});

// Actualizar objeto anidado
const ventaConfirmada = {
  ...venta,
  estado: "confirmada",
  producto: {
    ...venta.producto,
    stock: venta.producto.stock - venta.cantidad,
  },
};*/
