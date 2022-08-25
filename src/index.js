import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./store/ThemeContext";
import App from "./App";
import ArtistDetails from "./components/Artist/ArtistDetails/ArtistDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="artistdetails/:artistId"
          element={<ArtistDetails />}
        ></Route>
        <Route path="*" element={<p>Nothing here!</p>} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
