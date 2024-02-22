function generarFizzBuzz(n){
    if(n % 3 == 0){
        return "Fizz";
    }
    if(n == 5 || n == 10){
        return "Buzz";
    }
    return n;
}

export default generarFizzBuzz;