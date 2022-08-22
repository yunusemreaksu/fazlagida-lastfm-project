import classes from "./ArtistItem.module.css";

const ArtistItem = (props) => {
  return (
    <li className={classes.item_container}>
      <div className={classes.item_info}>
        <h2> {props.name} </h2>
        <p>Playcount: {props.playcount} </p>
        <p>Listeners: {props.listeners} </p>
        <a href={props.url}>Artist's Page</a>
      </div>
      <img
        src={props.image}
        alt={props.name}
        className={classes.item_image}
      />
    </li>
  );
};

export default ArtistItem;
