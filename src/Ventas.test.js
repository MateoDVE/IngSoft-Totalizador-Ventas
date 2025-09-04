import Totalizar from "./Ventas";

describe("Totalizar", () => {
  it("deberia mostrar la cantidad de items", () => {
    expect(Totalizar(5)).toEqual(5);
  });

  it("deberia mostrar la cantidad de cualquier item", () => {
    expect(Totalizar(3)).toEqual(3);
  });
});


