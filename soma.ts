import { strategy } from "./strategy";



export class Soma implements strategy {

    execute(num1: number, num2: number): number{
        var res = num1 + num2;
        return res;
    


    }
   
    
  
}

