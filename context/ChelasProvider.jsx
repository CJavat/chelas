import { createContext, useState } from "react";

const ChelasContext = createContext();

const ChelasProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const darkModeFunction = () => {
    //TODO: TERMINAR EL DARKMODE
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
      setDarkMode(false);
    }
  };

  return (
    <ChelasContext.Provider
      value={{
        darkMode,
        setDarkMode,
        darkModeFunction,
      }}
    >
      {children}
    </ChelasContext.Provider>
  );
};

export { ChelasProvider };
export default ChelasContext;
