"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// Definición de  clase [Impuesto]
class Impuesto {
  // Constructor de la clase Impuesto
  constructor(montoBrutoAnual, deducciones) {
    // Inicialización del monto bruto anual
    this._montoBrutoAnual = montoBrutoAnual;
    // Inicialización de las deducciones
    this._deducciones = deducciones;
  }

  // Getter para obtener el monto bruto anual
  get montoBrutoAnual() {
    return this._montoBrutoAnual;
  }

  // Setter para cambiar el monto bruto anual
  set montoBrutoAnual(nuevoMonto) {
    this._montoBrutoAnual = nuevoMonto;
  }

  // Getter para obtener las deducciones
  get deducciones() {
    return this._deducciones;
  }

  // Setter para cambiar las deducciones (no lo estoy usando)
  set deducciones(nuevasDeducciones) {
    this._deducciones = nuevasDeducciones;
  }
}

// Exportación de la clase Impuesto para que pueda ser utilizada en otros archivos (main)
var _default = exports.default = Impuesto;