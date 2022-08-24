import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import ApiUrl from "../../../constants/ApiUrl";
import ArtistDetail from "../ArtistDetail/ArtistDetail";
import classes from "./ArtistDetails.module.css";

const ArtistDetails = () => {
  const [albumData, setAlbumData] = useState([]);
  const [trackData, setTrackData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const loadingText = <p>LOADING...</p>;

  const getAlbumAndTrackData = async () => {
    const getAlbums = await axios.get(ApiUrl.getTopAlbums());
    const getTracks = await axios.get(ApiUrl.getTopTracks());
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

  const artistName = albumData.artist;

  useEffect(() => {
    getAlbumAndTrackData();
  }, []);

  return (
    <div>
      <nav>
        {albumData.map((item) => (
          <Link
            to={`/artistdetails/${item.artist.name}`}
            key={item.artist.name}
          >
            <ArtistDetail key={item.mbid} albumName={item.name} />
          </Link>
        ))}
        {trackData.map((item) => (
          <Link
            to={`/artistdetails/${item.artist.name}`}
            key={item.artist.name}
          >
            <ArtistDetail key={item.mbid} trackName={item.name} />
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default ArtistDetails;
