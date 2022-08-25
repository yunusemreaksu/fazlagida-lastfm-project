import { createContext, useState } from "react";
import { PropTypes } from "prop-types";

const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

ThemeContext.propTypes = {
  darkMode: PropTypes.bool,
};

export { ThemeContext, ThemeProvider };
