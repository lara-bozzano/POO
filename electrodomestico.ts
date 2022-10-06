//crear CLASS electrodomestico con las sig caract:
//nombre, precio base, color, consumo energetico y peso. Implementar un constructor con todoslos param

class Electrodomestico{
    nombre: string;
    precioBase: number;
    color: string;
    consumoEnergetico:string;
    peso: number;

    constructor(paramNombre:string, paramPrecioBase:number, paramColor:string, paramConsumo:string, paramPeso:number){
        this.nombre = paramNombre;
        this.precioBase = paramPrecioBase;
        this.color = paramColor;
        this.consumoEnergetico = paramConsumo;
        this.peso = paramPeso;
    }

    //METODOS
    verNombre(): string{
        return this.nombre
    }

    setearPrecio(precioDeUsuario:number): void{
        this.precioBase = precioDeUsuario;
    }

    verPrecioActual(): number {
        return this.precioBase
    }

    setColor(pColor: string): void{
        this.color = pColor;

    }
    verColor(): string {
        return this.color 
    }

    setearPeso(pesoDeUsuario): void{
        this.peso = pesoDeUsuario;
    }
}

//INSTANCIAS

let heladera = new Electrodomestico("Samsung",120000,"gris","KWh", 15);
let televisor = new Electrodomestico("Sony", 10000, "negro", "Wh", 5);
let computadora = new Electrodomestico("Bangho", 80000, "violeta", "Wh", 5);

//PIDO DATOS

console.log(heladera.verNombre());

heladera.setearPrecio(200000);
let precioHeladera: number = heladera.verPrecioActual()
console.log("precio actual: " + precioHeladera);

heladera.setColor("azul");
let colorHeladera: string = heladera.verColor();
console.log("color heladera: " + colorHeladera);
