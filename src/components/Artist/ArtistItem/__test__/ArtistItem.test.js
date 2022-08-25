import { render, screen } from "@testing-library/react";
import ArtistItem from "../ArtistItem";
import { BrowserRouter } from "react-router-dom";
import { ThemeContext, ThemeProvider } from "../../../../store/ThemeContext";

const MockArtistItem = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ArtistItem />
      </BrowserRouter>
    </ThemeProvider>
  );
};

test("renders alt text", async () => {
  render(<MockArtistItem />);

  const imgElement = screen.getByAltText(/the weekend/i);
  expect(imgElement).toBeInTheDocument();
});
