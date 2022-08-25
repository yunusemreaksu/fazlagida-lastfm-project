import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ArtistDetails from "../ArtistDetails";

const MockArtistDetails = () => {
  <BrowserRouter>
    <ArtistDetails />
  </BrowserRouter>;
};

describe("ArtistDetails", () => {
  test("renders detail", async () => {
    render(<MockArtistDetails />);

    const detailsDivElement = await screen.findByTestId("details-1");
    expect(detailsDivElement).toBeInTheDocument();
  });

  test("renders details", async () => {
    render(<MockArtistDetails />);

    const detailsDivElements = await screen.findAllByTestId(/details/i);
    expect(detailsDivElements.length).toBe(5);
  });
});
