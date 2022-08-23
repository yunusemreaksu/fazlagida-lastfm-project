import { useContext, useState } from "react";
import { ThemeContext } from "../../store/ThemeContext";
import classes from "./Header.module.css";

const Header = (props) => {
  const headerText = "Fazla Gida Last.FM Homework";
  const [buttonText, setButtonText] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const buttonClickHandler = () => {
    setButtonText(!buttonText);
    if (darkMode) {
      theme.dispatch({ type: "LIGHTMODE" });
    } else {
      theme.dispatch({ type: "DARKMODE" });
    }
  };
  

  return (
    <header
      className={`${classes.header_container} ${
        darkMode ? classes.header_dark : classes.header_light
      }`}
    >
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
