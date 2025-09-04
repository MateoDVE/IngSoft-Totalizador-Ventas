import Totalizar from "./Ventas";

const first = document.querySelector("#primer-numero");
const form = document.querySelector("#totalizar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);

  div.innerHTML = "<p>" + Totalizar(firstNumber) + "</p>";
});
