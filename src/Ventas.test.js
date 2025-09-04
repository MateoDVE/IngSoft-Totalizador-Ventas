import {cantItem, precioXItem,precioNeto} from "./Ventas";

describe("Totalizar", () => {
  it("deberia mostrar la cantidad de items", () => {
    expect(cantItem(5)).toEqual(5);
  });

  it("deberia mostrar la cantidad de cualquier item", () => {
    expect(cantItem(3)).toEqual(3);
  });

  it("deberia mostrar el precio por item", () => {
    expect(precioXItem(2)).toEqual(2);
  });

  it("deberia mostrar el precio Neto", () => {
    expect(precioNeto(4)).toEqual(40);
  });
});


