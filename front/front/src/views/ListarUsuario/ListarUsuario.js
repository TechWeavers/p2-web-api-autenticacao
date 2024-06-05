import Navbar from "../../components/Navbar/Navbar";
import ListarUsuarioTable from "../../components/ListarUsuario/ListarUsuario";

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
      <h1>Usuário não autenticado!</h1>
      <h2>Retorne a página de login pobter o token de autenticação!</h2>
      <p><a href="/">Login</a></p>
      </>
    );
  }

   
}

export default ListarUsuario;
