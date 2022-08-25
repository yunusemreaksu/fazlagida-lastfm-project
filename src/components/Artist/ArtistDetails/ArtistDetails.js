import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ApiUrl from "../../../constants/ApiUrl";
import { ThemeContext } from "../../../store/ThemeContext";
import classes from "./ArtistDetails.module.css";

const ArtistDetails = () => {
  const { darkMode } = useContext(ThemeContext);
  const [albumData, setAlbumData] = useState([]);
  const [trackData, setTrackData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  let params = useParams();

  const loadingText = (
    <p className={darkMode ? "loading ld_dark" : "loading ld_light"}>
      LOADING...
    </p>
  );

  const getAlbumAndTrackData = async () => {
    const getAlbums = await axios.get(
      ApiUrl.getTopAlbums(params.artistId, page)
    );
    const getTracks = await axios.get(
      ApiUrl.getTopTracks(params.artistId, page)
    );
    axios
      .all([getAlbums, getTracks])
      .then(
        axios.spread((...allData) => {
          const allAlbumData = allData[0].data.topalbums.album;
          const allTrackData = allData[1].data.toptracks.track;

          setAlbumData((prev) => {
            return [...prev, ...allAlbumData];
          });
          setTrackData((prev) => {
            return [...prev, ...allTrackData];
          });
        })
      )
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getAlbumAndTrackData();
  }, [page]);

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

  return (
    <div
      className={`${classes.main} ${
        darkMode ? classes.main_dark : classes.main_light
      }`}
    >
      <div>
        <h2
          className={`${classes.artist} ${
            darkMode ? classes.artist_dark : classes.artist_light
          }`}
        >
          {params.artistId}
        </h2>
      </div>
      <div
        className={`${classes.container} ${
          darkMode ? classes.container_dark : classes.container_light
        }`}
      >
        <div className={classes.card}>
          <h3>TOP ALBUMS</h3>
          {albumData.map((item, index) => (
            <div
              data-testid={`details-${index}`}
              className={`${classes.details} ${
                darkMode ? classes.details_dark : classes.details_light
              }`}
            >
              <img
                src={item.image[2]["#text"]}
                className={classes.image}
                alt={item.name}
              />
              <div className={classes.info}>
                <p>Album Name: {item.name}</p>
                <p>Playcount: {item.playcount}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={classes.card}>
          <h3>TOP TRACKS</h3>
          {trackData.map((item) => (
            <div
              className={`${classes.details} ${
                darkMode ? classes.details_dark : classes.details_light
              }`}
            >
              <img
                src={item.image[2]["#text"]}
                className={classes.image}
                alt={item.name}
              />
              <div className={classes.info}>
                <p>Song Name: {item.name}</p>
                <p>Playcount: {item.playcount}</p>
                <p>Listeners: {item.listeners}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isLoading && loadingText}
    </div>
  );
};

export default ArtistDetails;
