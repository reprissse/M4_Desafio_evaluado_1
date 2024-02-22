// Importación de las clases Cliente e Impuesto
import Cliente from './cliente.js';
import Impuesto from './impuesto.js';

// Creación de los objetos Impuesto
let impuesto1 = new Impuesto(1000000, 200000);
let impuesto2 = new Impuesto(2000000, 300000);
let impuesto3 = new Impuesto(1500000, 250000);

// Creación de los objetos Cliente
let cliente1 = new Cliente('Juan', impuesto1);
let cliente2 = new Cliente('Maria', impuesto2);
let cliente3 = new Cliente('Pedro', impuesto3);

// Impresión de los impuestos anuales de los clientes
console.log(`El impuesto anual del cliente ${cliente1.nombre} es ${cliente1.calcularImpuesto()}`);
console.log(`El impuesto anual del cliente ${cliente2.nombre} es ${cliente2.calcularImpuesto()}`);
console.log(`El impuesto anual del cliente ${cliente3.nombre} es ${cliente3.calcularImpuesto()}`);



