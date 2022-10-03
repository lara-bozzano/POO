//OBJETO, 3 FUNC Y 3 ESTADOS. PLANTEAR CLASE 

import { isThisTypeNode } from "typescript";

//EQUIPO DE MUSICA
//Func: prender/apagar, subir/bajar volumen, cambiar cancion/radio, pausar/play
//Estados: prendido/apagado, volumen actual, emisora actual, cancion actual, minuto cancion, marca

class Equipo{
    marca: string;
    modelo: string;
    volumenActual: number;
    tiempoCancion: number;

    //funciones

    constructor(marca: string, volumenActual: number) {
        this.marca = marca;
        this.volumenActual = volumenActual;
    }

    subirVolumen(){
        this.volumenActual = this.volumenActual + 1;
        console.log("El volumen subió a: " + this.volumenActual);
    }

    bajarVolumen(){
        this.volumenActual = this.volumenActual - 1;
        console.log("El volumen bajó a: " + this.volumenActual);
    }

    nombreMarca(){
        console.log("El nombre de la marca es: " + this.marca)
    }
}

let equipo = new Equipo("Samsung", 2);

console.log(equipo.marca);
console.log(equipo.volumenActual);

equipo.subirVolumen();
equipo.nombreMarca();
equipo.bajarVolumen();




