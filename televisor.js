var Televisor = /** @class */ (function () {
    function Televisor(paramPrendido, paramVolumen, paramCanal) {
        this.estaPrendido = paramPrendido;
        this.volumenActual = paramVolumen;
        this.canalActual = paramCanal;
    }
    //METODOS
    Televisor.prototype.setearVolumen = function (volumenDeUsuario) {
        this.volumenActual = volumenDeUsuario;
    };
    Televisor.prototype.verVolumen = function () {
        return this.volumenActual;
    };
    Televisor.prototype.setearCanal = function (canalDeUsuario) {
        this.canalActual = canalDeUsuario;
    };
    Televisor.prototype.verCanalActual = function () {
        return this.canalActual;
    };
    Televisor.prototype.prenderApagar = function () {
        if (this.estaPrendido === true) {
            this.estaPrendido = false;
            console.log("se apaga");
        }
        else {
            this.estaPrendido = true;
            console.log("se prende");
        }
    };
    return Televisor;
}());
//INSTANCIAS. CREO LOS OBJETOS
var tvLG = new Televisor(false, 15, 58);
var tvSamsung = new Televisor(true, 23, 45);
var tvSony = new Televisor(false, 78, 65);
//PIDO DATOS X METODOS
tvLG.setearCanal(564654);
var canalLG = tvLG.verCanalActual();
console.log("canal " + canalLG);
tvSamsung.prenderApagar();
