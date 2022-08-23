import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ArtistDetails from "./components/Artist/ArtistDetails/ArtistDetails";
import ArtistDetail from "./components/Artist/ArtistDetail/ArtistDetail";
import { ThemeProvider } from "./store/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/artistdetails" element={<ArtistDetails />}>
          <Route path=":artistId" element={<ArtistDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
