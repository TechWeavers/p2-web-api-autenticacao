import Navbar from "../../components/Navbar/Navbar";
import ListarUsuarioTable from "../../components/ListarUsuario/ListarUsuario";

function ListarUsuario() {
    return (
        <>
        <Navbar></Navbar>
        <div class="row ">
          <ListarUsuarioTable></ListarUsuarioTable>
        </div>
        </>
      );
}

export default ListarUsuario;
