import { render, screen } from "@testing-library/react";
import Home from "../app/page";

jest.mock("../app/components/ProductsArea", () => {
  return function MockProductsArea() {
    return (
      <section data-testid="products-area">
        Products Area
      </section>
    );
  };
});

describe("Home page (server component)", () => {
  it("renders the page and products area", async () => {
    const page = await Home();
    render(page);

    expect(
      screen.getByText(/welcome to agora/i)
    ).toBeInTheDocument();

    expect(
      screen.getByTestId("products-area")
    ).toBeInTheDocument();
  });
});
