import ArtistItem from "./ArtistItem";
import classes from "./ArtistList.module.css";

const ArtistList = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <ArtistItem key={item.mbid} id={item.mbid} name={item.name} />
      ))}
    </ul>
  );
};

export default ArtistList;
