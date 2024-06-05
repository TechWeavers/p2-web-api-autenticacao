import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Login from "./views/Login/Login";
import ListarUsuario from "./views/ListarUsuario/ListarUsuario";
import CadastroUsuario from "./views/CadastroUsuario/CadastroUsuario";
import Error from "./components/Error/Error";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/listar-usuarios" element={<ListarUsuario />} />
          <Route path="/cadastrar-usuario" element={<CadastroUsuario />} />
          <Route path="*" element={<Error/>} />

        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;

