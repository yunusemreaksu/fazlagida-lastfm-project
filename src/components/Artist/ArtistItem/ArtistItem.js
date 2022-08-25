import { useContext } from "react";
import { ThemeContext } from "../../../store/ThemeContext";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import classes from "./ArtistItem.module.css";

const ArtistItem = (props) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <li
      className={`${classes.container} ${
        darkMode ? classes.container_dark : classes.container_light
      }`}
    >
      <div
        className={`${classes.card} ${
          darkMode ? classes.card : classes.card_light
        }`}
      >
        <img src={props.imageSrc} alt={props.name} className={classes.image} />
        <div className={classes.info}>
          <h3>
            <Link to={`/artistdetails/${props.name}`}> {props.name} </Link>
          </h3>
          <p>Playcount: {props.playcount} </p>
          <p>Listeners: {props.listeners} </p>
          <a href={props.url}>Artist's Last.FM Page</a>
        </div>
      </div>
    </li>
  );
};

ArtistItem.propTypes = {
  darkMode: PropTypes.bool,
  name: PropTypes.string,
  playcount: PropTypes.string,
  listeners: PropTypes.string,
  url: PropTypes.string,
  imageSrc: PropTypes.string,
};

export default ArtistItem;
