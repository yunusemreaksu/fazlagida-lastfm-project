import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeContext, ThemeProvider } from "../../../../store/ThemeContext";
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
  //   const buttonElement = screen.getByRole("button", {name: /button/i})
  //   fireEvent.click(buttonElement)
  //   expect(buttonElement).toBeInTheDocument();
  const headingElement = screen.getByText(/header/i);
  expect(headingElement).toBeInTheDocument();
});
