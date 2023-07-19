import useChelas from "../../hooks/useChelas";

const Header = () => {
  const { darkMode, darkModeFunction } = useChelas();

  return (
    <div className="flex justify-between items-center px-5 h-10 bg-red-600 text-white dark:bg-black dark:text-red-600">
      <h1>Chelas</h1>
      {darkMode ? <p>DarkMode Activado</p> : <p>DarkMode Desactivado</p>}
      <button onClick={darkModeFunction}>Cambiar Tema</button>
    </div>
  );
};

export default Header;
