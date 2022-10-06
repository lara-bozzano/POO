class Televisor{
    private estaPrendido: boolean;
    private volumenActual: number;
    private canalActual: number;

    constructor(paramPrendido:boolean, paramVolumen: number, paramCanal: number){
        this.estaPrendido = paramPrendido;
        this.volumenActual = paramVolumen;
        this.canalActual = paramCanal;
    }

    //METODOS
    public setearVolumen(volumenDeUsuario:number): void {
        this.volumenActual = volumenDeUsuario;
    }
    public verVolumen(): number{
        return this.volumenActual;
    }
    public setearCanal(canalDeUsuario:number): void {
        this.canalActual = canalDeUsuario;
    }
    public verCanalActual(): number{
        return this.canalActual;
    }
    public prenderApagar(): void{
        if(this.estaPrendido === true){
            this.estaPrendido = false;
            console.log("se apaga");
        } else {
            this.estaPrendido = true;
            console.log("se prende");
        }
    }
}

//INSTANCIAS. CREO LOS OBJETOS
let tvLG = new Televisor (false,15,58);
let tvSamsung = new Televisor (true,23,45);
let tvSony = new Televisor (false,78,65);

//PIDO DATOS X METODOS
tvLG.setearCanal(564654);
let canalLG: number = tvLG.verCanalActual();
console.log("canal " + canalLG);


tvSamsung.prenderApagar();