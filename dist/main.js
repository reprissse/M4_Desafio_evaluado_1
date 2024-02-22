"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));
var _impuesto = _interopRequireDefault(require("./impuesto.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Importación de las clases Cliente e Impuesto

// Creación de los objetos Impuesto
let impuesto1 = new _impuesto.default(1000000, 200000);
let impuesto2 = new _impuesto.default(2000000, 300000);
let impuesto3 = new _impuesto.default(1500000, 250000);

// Creación de los objetos Cliente
let cliente1 = new _cliente.default('Juan', impuesto1);
let cliente2 = new _cliente.default('Maria', impuesto2);
let cliente3 = new _cliente.default('Pedro', impuesto3);

// Impresión de los impuestos anuales de los clientes
console.log("El impuesto anual del cliente ".concat(cliente1.nombre, " es ").concat(cliente1.calcularImpuesto()));
console.log("El impuesto anual del cliente ".concat(cliente2.nombre, " es ").concat(cliente2.calcularImpuesto()));
console.log("El impuesto anual del cliente ".concat(cliente3.nombre, " es ").concat(cliente3.calcularImpuesto()));