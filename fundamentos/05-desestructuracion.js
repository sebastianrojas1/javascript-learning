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
/*
const productoEncontrado = productos.find((producto) => producto.id === 1);
const {nombre, precio, stock} = productoEncontrado;
console.log(nombre, precio, stock);
*/
// Desestructurar permite extraer propiedades y guardarlas en variables locales.
// Es util cuando solo se necesita una parte del objeto.
const ventaEncontrado = ventas.find((venta) => venta.id === 1);
const productoEncontrado = productos.find((producto)=>producto.id === ventaEncontrado.productoId);
const clienteEncontrado = clientes.find((cliente)=>cliente.id===ventaEncontrado.clienteId);

const{id, cantidad, estado} = ventaEncontrado;
// El alias evita choques de nombres cuando varios objetos tienen una propiedad llamada nombre.
const{nombre: nombreCliente} = clienteEncontrado;
const{nombre: nombreProducto, precio: precioProducto} = productoEncontrado;

const total = cantidad * precioProducto;
console.log("Resumen de la venta:" + "\n", nombreCliente +"-"+  nombreProducto 
    +"-"+ cantidad  +"-" +precioProducto +"-"+ total);
// Tambien se puede desestructurar directamente en los parametros de una funcion.
function mostrarResumenProducto({ nombre, precio, stock }) {
  console.log(
    `Producto: ${nombre}
     Precio: ${precio}
     Stock: ${stock}`
  );
}
mostrarResumenProducto(productoEncontrado);


function calcularTotalVenta ({cantidad},{precio}){
    return cantidad * precio;
}
console.log(calcularTotalVenta(ventaEncontrado, productoEncontrado));

 
const productoSinStock = {
  id: 4,
  nombre: "Notebook",
  precio: 900000,
};
// El valor por defecto evita undefined cuando una propiedad no existe.
function mostrarProductoConStock({ nombre, precio, stock = 0 }) {
  console.log(`Producto: ${nombre} - Precio: ${precio} - Stock: ${stock}`);
}
mostrarProductoConStock(productoSinStock);

//De esta forma no recorro el array, se guardan en orden hasta cuantas variables se declaren.
// si hay mas elementos en el array que variables declaradas, los sobrantes se ignoran.
// En arrays importa la posicion, no el nombre de la variable.
const [primerProducto, segundoProducto] = productos;

console.log(`Primer producto: ${primerProducto.nombre}`);
console.log(`Segundo producto: ${segundoProducto.nombre}`);

//Desetructuración de objetos anidados
// En objetos anidados se puede entrar varios niveles en una sola desestructuracion.
const ventaDetallada = {
  id: 1,
  cantidad: 2,
  estado: "pendiente",
  cliente: {
    id: 1,
    nombre: "Juan",
    email: "juan@gmail.com",
  },
  producto: {
    id: 1,
    nombre: "Mouse inalámbrico",
    precio: 25000,
    stock: 10,
  },
};
const {
    id:idVenta,
    cantidad:cantidadVenta,
    estado:estadoVenta,
    cliente:{nombre: nombreCliente1},
    producto: {nombre: nombreProducto1, precio: precioProducto1},
} = ventaDetallada;
const total2 = cantidadVenta * precioProducto1;
console.log(`Resumen de la venta: ${idVenta} - Cliente: ${nombreCliente1} - 
            Producto: ${nombreProducto1} - Total: ${total2} - Estado: ${estadoVenta}`);

//REST
// rest junta en un nuevo objeto las propiedades que no se extrajeron antes.
 const { nombre, ...datosProducto } = productoEncontrado;
 console.log("Nombre del producto:", nombre);
 console.log("Datos del producto:", datosProducto);
