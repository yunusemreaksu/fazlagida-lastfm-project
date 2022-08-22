import { useState } from "react";
import classes from "./Header.module.css";

const Header = () => {
  const [buttonText, setButtonText] = useState(false);
  const headerText = "Fazla Gida Last.FM Homework";

  const buttonClickHandler = () => {
    setButtonText(!buttonText);
  };

  return (
    <header className={classes.header_container}>
      <h1> {headerText} </h1>
      <button
        type="button"
        onClick={buttonClickHandler}
        className={buttonText ? classes.button_light : classes.button_dark}
      >
        {buttonText ? "Switch to Light Theme" : "Switch to Dark Theme"}
      </button>
    </header>
  );
};

export default Header;
