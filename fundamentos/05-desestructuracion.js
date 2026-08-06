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
const ventaEncontrado = ventas.find((venta) => venta.id === 1);
const productoEncontrado = productos.find((producto)=>producto.id === ventaEncontrado.productoId);
const clienteEncontrado = clientes.find((cliente)=>cliente.id===ventaEncontrado.clienteId);

const{id, cantidad, estado} = ventaEncontrado;
const{nombre: nombreCliente} = clienteEncontrado;
const{nombre: nombreProducto, precio: precioProducto} = productoEncontrado;

const total = cantidad * precioProducto;
console.log("Resumen de la venta:" + "\n", nombreCliente +"-"+  nombreProducto 
    +"-"+ cantidad  +"-" +precioProducto +"-"+ total);

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