"use strict";
exports.__esModule = true;
exports.Telefono = void 0;
// Clase Telefono
var Telefono = /** @class */ (function () {
    function Telefono(tipo, numero) {
        this._tipo = tipo;
        this._numero = numero;
    }
    Object.defineProperty(Telefono.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        set: function (tipo) {
            this._tipo = tipo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Telefono.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        set: function (numero) {
            this._numero = numero;
        },
        enumerable: false,
        configurable: true
    });
    return Telefono;
}());
exports.Telefono = Telefono;
