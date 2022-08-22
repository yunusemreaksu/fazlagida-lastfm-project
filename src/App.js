import { useEffect, useState } from "react";
import "./App.css";
import ArtistList from "./components/Artist/ArtistList";
import Header from "./components/UI/Header";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
    <>
      <Header />
      {isLoading ? loadingText : <ArtistList items={data} />}
    </>
  );
}

export default App;
