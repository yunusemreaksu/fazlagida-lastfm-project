import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../../store/ThemeContext";
import { Link, Outlet } from "react-router-dom";
import classes from "./ArtistItem.module.css";
import ApiUrl from "../../../constants/ApiUrl";
import ArtistDetail from "../ArtistDetail/ArtistDetail";
import axios from "axios";

const ArtistItem = (props) => {
  const htext = `/artistdetails/${props.name}`;
  const { darkMode } = useContext(ThemeContext);
  const [fetchedName, setFetchedName] = useState("");
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setFetchedName(props.name);
    setClicked(true);
  };

  const [albumData, setAlbumData] = useState([]);
  const [trackData, setTrackData] = useState([]);

  const getAlbumAndTrackData = async () => {
    const getAlbums = await axios.get(ApiUrl.getTopAlbums(fetchedName));
    const getTracks = await axios.get(ApiUrl.getTopTracks(fetchedName));
    axios
      .all([getAlbums, getTracks])
      .then(
        axios.spread((...allData) => {
          const allAlbumData = allData[0].data.topalbums.album;
          const allTrackData = allData[1].data.toptracks.track;

          setAlbumData(allAlbumData);
          setTrackData(allTrackData);
        })
      )
      .catch(function (error) {
        console.log(error);
      });
  };

  console.log(fetchedName);
  console.log(albumData);

  useEffect(() => {
    getAlbumAndTrackData();
  }, []);

  return (
    <li
      className={`${classes.item_container} ${
        darkMode ? classes.container_dark : classes.container_light
      }`}
    >
      <div className={classes.item_info}>
        <h3>
          <button onClick={handleClick}>
            {props.name}
            {clicked &&
              albumData.map((item) => (
                <Link
                  to={`/artistdetails/${fetchedName}`}
                  key={item.artist.name}
                >
                  <ArtistDetail key={item.mbid} albumName={item.name} />
                </Link>
              ))}
          </button>
        </h3>
        <p>Playcount: {props.playcount} </p>
        <p>Listeners: {props.listeners} </p>
        <a href={props.url}>Artist's Last.FM Page</a>
      </div>
      <img
        src={props.imageText}
        alt={props.name}
        className={classes.item_image}
      />
    </li>
  );
};

export default ArtistItem;
