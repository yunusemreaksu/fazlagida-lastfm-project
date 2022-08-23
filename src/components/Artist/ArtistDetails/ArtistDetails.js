import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import ArtistDetail from "../ArtistDetail/ArtistDetail";
import classes from "./ArtistDetails.module.css";

const ArtistDetails = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadingText = <p>LOADING...</p>;

  const getAlbumsData = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_ALBUMS_API_URL);
      const json = await response.json();
      setData(json.topalbums.album);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAlbumsData();
  }, []);

  return (
    <div>
      <nav>
        {data.map((item) => (
          <Link
            to={`/artistdetails/${item.artist.name}`}
            key={item.artist.name}
          >
            <ArtistDetail key={item.mbid} name={item.name} />
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default ArtistDetails;
