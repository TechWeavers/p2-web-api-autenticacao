import Navbar from "../../components/Navbar/Navbar";
import ListarUsuarioTable from "../../components/ListarUsuario/ListarUsuario";
import Error from "../../components/Error/Error";

function ListarUsuario() {

  if(localStorage.getItem('token')){
    return (
      <>
      <Navbar></Navbar>
      <div class="row ">
        <ListarUsuarioTable></ListarUsuarioTable>
      </div>
      </>
    );

  }else{
    return (
      <>
        <Error></Error>
      </>
    );
  }

   
}

export default ListarUsuario;
