import { productos, clientes, ventas } from "./datos.js";
import {crearResumenVenta, obtenerResumenVentas, obtenerVentasPorEstado} from "./ventas-service.js";

const resumenVentas = obtenerResumenVentas(ventas, clientes, productos);
console.log(resumenVentas);

const ventasPendientes = obtenerVentasPorEstado(ventas, "pendiente");
console.log("Ventas pendientes:", ventasPendientes);

