import { useEffect, useState, useContext } from "react";
import ArtistList from "./components/Artist/ArtistList/ArtistList";
import Header from "./components/UI/Header";
import { ThemeContext } from "./store/ThemeContext";
import "./App.css";
import axios from "axios";
import ApiUrl from "./constants/ApiUrl";

function App() {
  const [artistData, setArtistData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonText, setButtonText] = useState(false);

  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const buttonClickHandler = () => {
    setButtonText(!buttonText);
    toggleDarkMode();
  };

  const loadingText = (
    <p className={darkMode ? "loading ld_dark" : "loading ld_light"}>
      LOADING...
    </p>
  );

  const getArtistsData = async () => {
    try {
      const response = await axios.get(ApiUrl.getTopArtists(page));
      setArtistData((prev) => {
        return [...prev, ...response.data.artists.artist];
      });
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setIsLoading(true);
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    getArtistsData();
  }, [page]);

  return (
    <div className={darkMode ? `container bg_dark` : `container bg_light`}>
      <Header
        onThemeChange={buttonClickHandler}
        items={{ darkMode, buttonText }}
      />
      <ArtistList items={artistData} />
      {isLoading && loadingText}
    </div>
  );
}

export default App;
