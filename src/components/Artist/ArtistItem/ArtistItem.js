import classes from "./ArtistItem.module.css";

const ArtistItem = (props) => {
  return (
    <li className={classes.item_container}>
      <div className={classes.item_info}>
        <h3>
          <a href="/artistdetails"> {props.name} </a>
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