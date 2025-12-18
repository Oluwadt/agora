import { render, screen } from "@testing-library/react";
import Home from "../app/page";

jest.mock("../app/components/ProductsArea", () => {
  return function MockProductsArea() {
    return <section data-testid="products-area" />;
  };
});

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        { id: "1", name: "Laptop" },
        { id: "2", name: "Phone" },
      ]),
  })
);

describe("Home page", () => {
  test("renders products area", async () => {
    const view = await Home();
    render(view);

    expect(
      screen.getByTestId("products-area")
    ).toBeInTheDocument();
  });
});
