import { render, screen, fireEvent } from "@testing-library/react";
import ArtistItem from "../ArtistItem";

test("renders alt text", async () => {
  render(<ArtistItem />);
  //   const buttonElement = screen.getByRole("button", {name: /button/i})
  //   fireEvent.click(buttonElement)
  //   expect(buttonElement).toBeInTheDocument();
  const imgElement = screen.getByAltText(/header/i);
  expect(imgElement).toBeInTheDocument();
});
