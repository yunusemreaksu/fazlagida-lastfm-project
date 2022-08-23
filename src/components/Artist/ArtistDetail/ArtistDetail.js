import { useParams } from "react-router-dom";
import classes from "./ArtistDetail.module.css";

const ArtistDetail = (props) => {
  let params = useParams();
  return (
    <div>
      <h4> {params.artistId} </h4>
      <p> {props.name} </p>
    </div>
  );
};

export default ArtistDetail;
