import generarFizzBuzz from "./fizzbuzz";

function generarVectorFizzBuzz(numero){
    const vector = [];
    for(let i = 1; i <= numero; i++){
        vector[i] = generarFizzBuzz(i);
        
    }
    return vector;
}

export default generarVectorFizzBuzz;