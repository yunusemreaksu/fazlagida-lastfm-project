import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const MockApp = () => {
  <BrowserRouter>
    <App />
  </BrowserRouter>;
};

test("fetch data", () => {
  render(<MockApp />);
});
