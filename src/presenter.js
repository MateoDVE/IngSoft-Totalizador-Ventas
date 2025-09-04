import {cantItem, precioNeto, precioXItem} from "./Ventas";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#totalizar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + "Cantidad de items:" + cantItem(firstNumber) + "</p>" + "<p>" + "Precio por item:" + precioXItem(secondNumber) + "</p>"+ "<p>" + "Precio Neto:" +
   precioNeto(firstNumber) + "</p>";
});
