import { render, screen } from "@testing-library/react";
import ProductCard from "../app/components/ProductsArea";

describe("ProductCard Component", () => {
  const mockProducts = [
    { id: 1, title: "Laptop", price: 1000, thumbnail: "laptop.jpg" },
    { id: 2, title: "Phone", price: 500, thumbnail: "phone.jpg" }
  ];

  test("renders product titles", () => {
    render(<ProductCard products={mockProducts} />);
    expect(screen.getByText("Laptop")).toBeInTheDocument();
    expect(screen.getByText("Phone")).toBeInTheDocument();
  });

  test("renders product images", () => {
    render(<ProductCard products={mockProducts} />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBe(2);
  });

  test("renders product prices", () => {
    render(<ProductCard products={mockProducts} />);
    expect(screen.getByText("$1000")).toBeInTheDocument();
    expect(screen.getByText("$500")).toBeInTheDocument();
  });
});
