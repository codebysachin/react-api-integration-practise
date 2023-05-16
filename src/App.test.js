import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Test for App Component", () => {
  test("Reads the Text from H1 tag", () => {
    render(<App />);
    const h1Element = screen.getByText("/API Integration/i");
    expect(h1Element).toBeInTheDocument();
  });
});
