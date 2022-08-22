import ArtistItem from "./ArtistItem";
import classes from "./ArtistList.module.css";

const ArtistList = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <ArtistItem
          key={item.mbid}
          id={item.mbid}
          name={item.name}
          playcount={item.playcount}
          listeners={item.listeners}
          url={item.url}
          image={item.image[0]["#text"]}
        />
      ))}
    </ul>
  );
};

export default ArtistList;
