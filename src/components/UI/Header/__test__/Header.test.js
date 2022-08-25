import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "../../../../store/ThemeContext";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";

const MockHeader = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    </BrowserRouter>
  );
};

test("renders header text", async () => {
  render(
    <MockHeader
      headerText={"header"}
      buttonText={"button"}
      onThemeChange={() => {}}
    />
  );

  const headingElement = screen.getByText(/header/i);
  expect(headingElement).toBeInTheDocument();
});
