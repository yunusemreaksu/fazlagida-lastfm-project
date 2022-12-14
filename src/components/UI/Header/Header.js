import classes from "./Header.module.css";
import { PropTypes } from "prop-types";

const Header = (props) => {
  const { darkMode, buttonText, headerText } = props.items;

  const clickHandler = () => {
    props.onThemeChange();
  };

  return (
    <header
      className={`${classes.header_container} ${
        darkMode ? classes.header_dark : classes.header_light
      }`}
    >
      <h1 title="Header"> {headerText} </h1>
      <button
        type="button"
        onClick={clickHandler}
        className={buttonText ? classes.button_light : classes.button_dark}
      >
        {buttonText ? "Switch to Light Theme" : "Switch to Dark Theme"}
      </button>
    </header>
  );
};

Header.propTypes = {
  darkMode: PropTypes.bool,
  buttonText: PropTypes.string,
  headerText: PropTypes.string,
  onThemeChange: PropTypes.func,
};

export default Header;
