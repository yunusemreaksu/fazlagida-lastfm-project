import { useContext } from "react";
import { ThemeContext } from "../../../store/ThemeContext";
import ArtistItem from "../ArtistItem/ArtistItem";
import classes from "./ArtistList.module.css";

const ArtistList = (props) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div>
      <h2
        className={`${classes.list_header} ${
          darkMode ? classes.header_dark : classes.header_light
        }`}
      >
        Top Artists List
      </h2>
      <ul>
        {props.items.map((item) => (
          <ArtistItem
            key={item.mbid}
            id={item.mbid}
            name={item.name}
            playcount={item.playcount}
            listeners={item.listeners}
            url={item.url}
            imageText={item.image[0]["#text"]}
          />
        ))}
      </ul>
    </div>
  );
};

export default ArtistList;
