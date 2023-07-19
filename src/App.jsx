import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ChelasProvider } from "../context/ChelasProvider";

import PublicLayout from "../layout/PublicLayout";
import Prueba from "./pages/Prueba";

function App() {
  return (
    <BrowserRouter>
      <ChelasProvider>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Prueba />} />
          </Route>
        </Routes>
      </ChelasProvider>
    </BrowserRouter>
  );
}

export default App;

/*
APOYARME EN ESTÁ PÁGINA
https://github.com/CJavat/curso-react-udemy2/tree/master/uptask_mern/frontend/src
*/
