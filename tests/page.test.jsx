// tests/page.test.jsx
import { render, screen } from "@testing-library/react";
import Home from "../app/page";

jest.mock("../app/components/ProductCard", () => {
  return function MockedProductCard() {
    return <div data-testid="product-card-mock">Mock ProductCard</div>;
  };
});

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        products: [
          { id: 1, title: "Laptop", price: 1000, thumbnail: "laptop.jpg" }
        ]
      })
  })
);

describe("Home Page Integration Test", () => {
  test("fetches products and renders ProductCard", async () => {
    const view = await Home();
    render(view);

    expect(screen.getByText("Welcome to Agora")).toBeInTheDocument();
    expect(screen.getByTestId("product-card-mock")).toBeInTheDocument();
  });
});
