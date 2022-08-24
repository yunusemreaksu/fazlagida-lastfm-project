import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../../store/ThemeContext";
import { Link, Outlet } from "react-router-dom";
import classes from "./ArtistItem.module.css";
import ApiUrl from "../../../constants/ApiUrl";
import ArtistDetail from "../ArtistDetail/ArtistDetail";
import axios from "axios";

const ArtistItem = (props) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <li
      className={`${classes.item_container} ${
        darkMode ? classes.container_dark : classes.container_light
      }`}
    >
      <div className={classes.item_info}>
        <h3>
          <Link to={`/artistdetails/${props.name}`}> {props.name} </Link>
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
