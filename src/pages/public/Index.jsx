import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import consultaAxios from "../../../config/axios";
import useChelas from "../../hooks/useChelas";

import Spinner from "../../components/Spinner";
import MostrarChela from "../../components/MostrarChela";

const Index = () => {
  const { usuarioLogeado, chelas, setChelas } = useChelas();
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const obtenerChelas = async () => {
      setCargando(true);
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
      setCargando(false);
    };
    obtenerChelas();
  }, []);

  return cargando ? (
    <Spinner />
  ) : (
    <div className="flex-1">
      <h1 className="font-bold text-5xl mt-7">TODAS LAS CHELAS</h1>
      <div className="mt-16 flex flex-col gap-8">
        {chelas ? (
          chelas.map((chela) => (
            <MostrarChela
              key={chela._id}
              chela={chela}
              usuarioLogeado={usuarioLogeado}
            />
          ))
        ) : (
          <p className="font-bold text-center bg-red-300 text-red-600 px-3 py-2 rounded-full mt-10">
            AÚN NO HAY CHELAS REGISTRADAS
          </p>
        )}
      </div>
    </div>
  );
};

export default Index;
