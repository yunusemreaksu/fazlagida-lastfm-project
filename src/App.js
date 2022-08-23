import { useEffect, useState, useContext } from "react";
import "./App.css";
import ArtistList from "./components/Artist/ArtistList/ArtistList";
import Header from "./components/UI/Header";
import { ThemeContext } from "./store/ThemeContext";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

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
    <div className={`${darkMode ? "bg_dark" : "bg_light"}`}>
      <Header />
      {isLoading ? loadingText : <ArtistList items={data} />}
    </div>
  );
}

export default App;
