"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// Definición de clase [Cliente]
class Cliente {
  // Constructor de la clase Cliente
  constructor(nombre, impuesto) {
    // Inicialización del nombre del cliente
    this._nombre = nombre;
    // Inicialización del objeto impuesto asociado al cliente
    this._impuesto = impuesto;
  }

  // Getter para obtener el nombre del cliente
  get nombre() {
    return this._nombre;
  }

  // Setter para cambiar el nombre del cliente (no lo estoy usando)
  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  // Método para calcular el impuesto del cliente
  calcularImpuesto() {
    // Fórmula para calcular el impuesto
    return (this._impuesto.montoBrutoAnual - this._impuesto.deducciones) * 0.21;
  }
}

// Exportación de la clase Cliente para que pueda ser utilizada en otros archivos (impuesto-main)
var _default = exports.default = Cliente;