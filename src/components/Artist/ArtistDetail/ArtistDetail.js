import { useParams } from "react-router-dom";
import classes from "./ArtistDetail.module.css";

const ArtistDetail = (props) => {
  return <div> {props.name} </div>;
};

export default ArtistDetail;
