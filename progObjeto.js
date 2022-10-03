"use strict";
//OBJETO, 3 FUNC Y 3 ESTADOS. PLANTEAR CLASE 
exports.__esModule = true;
//EQUIPO DE MUSICA
//Func: prender/apagar, subir/bajar volumen, cambiar cancion/radio, pausar/play
//Estados: prendido/apagado, volumen actual, emisora actual, cancion actual, minuto cancion, marca
var Equipo = /** @class */ (function () {
    //funciones
    function Equipo(marca, volumenActual) {
        this.marca = marca;
        this.volumenActual = volumenActual;
    }
    Equipo.prototype.subirVolumen = function () {
        this.volumenActual = this.volumenActual + 1;
        console.log("El volumen subió a: " + this.volumenActual);
    };
    Equipo.prototype.bajarVolumen = function () {
        this.volumenActual = this.volumenActual - 1;
        console.log("El volumen bajó a: " + this.volumenActual);
    };
    Equipo.prototype.nombreMarca = function () {
        console.log("El nombre de la marca es: " + this.marca);
    };
    return Equipo;
}());
var equipo = new Equipo("Samsung", 2);
console.log(equipo.marca);
console.log(equipo.volumenActual);
equipo.subirVolumen();
equipo.nombreMarca();
equipo.bajarVolumen();
