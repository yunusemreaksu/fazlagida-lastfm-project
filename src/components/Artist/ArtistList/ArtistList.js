import { useContext } from "react";
import { ThemeContext } from "../../../store/ThemeContext";
import ArtistItem from "../ArtistItem/ArtistItem";
import { PropTypes } from "prop-types";
import classes from "./ArtistList.module.css";

const ArtistList = (props) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={classes.main}>
      <h2
        className={`${classes.list_header} ${
          darkMode ? classes.header_dark : classes.header_light
        }`}
      >
        Top Artists List
      </h2>
      <ul className={classes.list}>
        {props.items.map((item) => (
          <ArtistItem
            key={item.mbid}
            id={item.mbid}
            name={item.name}
            playcount={item.playcount}
            listeners={item.listeners}
            url={item.url}
            imageSrc={item.image[2]["#text"]}
          />
        ))}
      </ul>
    </div>
  );
};

ArtistList.propTypes = {
  darkMode: PropTypes.bool,
  items: PropTypes.array,
};

export default ArtistList;
