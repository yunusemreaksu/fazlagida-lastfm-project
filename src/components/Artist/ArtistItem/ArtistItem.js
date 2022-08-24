import { useContext, useState } from "react";
import { ThemeContext } from "../../../store/ThemeContext";
import classes from "./ArtistItem.module.css";

const ArtistItem = (props) => {
  const { darkMode } = useContext(ThemeContext);
  const htext = `/artistdetails/${props.name}`;
  const [fetchedName, setFetchedName] = useState("");
  const handleClick = () => {
    setFetchedName(props.name);
  };

  return (
    <li
      className={`${classes.item_container} ${
        darkMode ? classes.container_dark : classes.container_light
      }`}
    >
      <div className={classes.item_info}>
        <h3>
          <a href={htext} onClick={handleClick}>
            {props.name}
          </a>
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
