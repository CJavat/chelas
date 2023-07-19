import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import consultaAxios from "../../config/axios";

const ChelasContext = createContext();

// eslint-disable-next-line react/prop-types
const ChelasProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [usuarioLogeado, setUsuarioLogeado] = useState({});
  const [chelas, setChelas] = useState([]);

  useEffect(() => {
    if (localStorage.theme === "dark") {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      localStorage.removeItem("theme");
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    let usuario;

    if (localStorage.getItem("usuario")) {
      usuario = localStorage.getItem("usuario");
      usuario = JSON.parse(usuario);
    }

    setUsuarioLogeado(usuario);
  }, []);

  useEffect(() => {
    const obtenerChelas = async () => {
      try {
        const respuesta = await consultaAxios.get("/chela/obtener-chelas/");
        setChelas(respuesta.data);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "HA OCURRIDO UN ERROR",
          text: error.message,
        });
      }
    };
    obtenerChelas();
  }, [chelas]);

  const darkModeFunction = () => {
    document.documentElement.classList.toggle("dark");

    if (document.documentElement.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    } else {
      localStorage.removeItem("theme");
      setDarkMode(false);
    }
  };

  return (
    <ChelasContext.Provider
      value={{
        darkMode,
        usuarioLogeado,
        chelas,

        setDarkMode,
        setUsuarioLogeado,
        setChelas,

        darkModeFunction,
      }}
    >
      {children}
    </ChelasContext.Provider>
  );
};

export { ChelasProvider };
export default ChelasContext;
