import generarFizzBuzz from "./fizzbuzz";

describe("FizzBuzz", () => {
  it("Deberia generar el mismo numero para un numero que no tiene reglas Ej. num 1 => 1", () => {
    expect(generarFizzBuzz(1)).toEqual(1);
  });

  it("Deberia generar el mismo numero para un numero que no tiene reglas Ej. num 2 => 2", () => {
    expect(generarFizzBuzz(2)).toEqual(2);
  });

  it("Deberia generar la cadena FIZZ para un numero que tiene esa regla MULTIPLO DE 3 Ej. num 3 => Fizz", () => {
    expect(generarFizzBuzz(6)).toEqual("Fizz");
  });

});
