import { strategy } from "./strategy";
import { Multiplicacao } from "./Multiplicação";
import { Subtracao } from "./subtração";
import { Soma } from "./soma";

export class Calculadora{

    calculador: strategy;

    constructor(_calculador: strategy){
        this.calculador = this.calculador;
        


    }

    _calculador(num1: number, num2: number){
        var res = this.calculador.execute(num1, num2);
        return res;
    }
       


}