import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = (dark) => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
