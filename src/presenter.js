// import sumar from "./sumador";
//import generarFizzBuzz from "./fizzbuzz"
import generarVectorFizzBuzz from "./generarVector";
import generarVector from "./generarVector";

const first = document.querySelector("#primer-numero");
// const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  console.log(firstNumber);
  const vector = generarVectorFizzBuzz(first.value)

  console.log(vector)
  // const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + vector + "</p>";
});
