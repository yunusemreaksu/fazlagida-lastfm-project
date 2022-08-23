import { useEffect, useState, useContext } from "react";
import ArtistList from "./components/Artist/ArtistList/ArtistList";
import Header from "./components/UI/Header";
import { ThemeContext, ThemeProvider } from "./store/ThemeContext";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [buttonText, setButtonText] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const buttonClickHandler = () => {
    setButtonText(!buttonText);
    toggleDarkMode();
  };

  const loadingText = <p>LOADING...</p>;

  const getArtistsData = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_ARTISTS_API_URL);
      const json = await response.json();
      setData(json.artists.artist);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getArtistsData();
  }, []);

  return (
    <div className={darkMode ? `container bg_dark` : `container bg_light`}>
      <Header
        onThemeChange={buttonClickHandler}
        items={{ darkMode, buttonText }}
      />
      {isLoading ? loadingText : <ArtistList items={data} />}
    </div>
  );
}

export default App;
