import { useParams } from "react-router-dom";
import classes from "./ArtistDetail.module.css";

const ArtistDetail = (props) => {
  let params = useParams();
  return (
    <div className={classes.container_row}>
      <div className={classes.card}>
        <h4> {params.artistId} </h4>
        <p> {props.albumName} </p>
      </div>
      <div className={classes.card}>
        <p> {props.trackName} </p>
      </div>
    </div>
  );
};

export default ArtistDetail;
