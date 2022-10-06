//crear CLASS electrodomestico con las sig caract:
//nombre, precio base, color, consumo energetico y peso. Implementar un constructor con todoslos param
var Electrodomestico = /** @class */ (function () {
    function Electrodomestico(paramNombre, paramPrecioBase, paramColor, paramConsumo, paramPeso) {
        this.nombre = paramNombre;
        this.precioBase = paramPrecioBase;
        this.color = paramColor;
        this.consumoEnergetico = paramConsumo;
        this.peso = paramPeso;
    }
    //METODOS
    Electrodomestico.prototype.verNombre = function () {
        return this.nombre;
    };
    Electrodomestico.prototype.setearPrecio = function (precioDeUsuario) {
        this.precioBase = precioDeUsuario;
    };
    Electrodomestico.prototype.verPrecioActual = function () {
        return this.precioBase;
    };
    Electrodomestico.prototype.setColor = function (pColor) {
        this.color = pColor;
    };
    Electrodomestico.prototype.verColor = function () {
        return this.color;
    };
    Electrodomestico.prototype.setearPeso = function (pesoDeUsuario) {
        this.peso = pesoDeUsuario;
    };
    return Electrodomestico;
}());
//INSTANCIAS
var heladera = new Electrodomestico("Samsung", 120000, "gris", "KWh", 15);
var televisor = new Electrodomestico("Sony", 10000, "negro", "Wh", 5);
var computadora = new Electrodomestico("Bangho", 80000, "violeta", "Wh", 5);
//PIDO DATOS
console.log(heladera.verNombre());
heladera.setearPrecio(200000);
var precioHeladera = heladera.verPrecioActual();
console.log("precio actual: " + precioHeladera);
heladera.setColor("azul");
var colorHeladera = heladera.verColor();
console.log("color heladera: " + colorHeladera);
