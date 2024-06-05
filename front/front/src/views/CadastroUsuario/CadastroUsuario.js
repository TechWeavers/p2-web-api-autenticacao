import Navbar from "../../components/Navbar/Navbar";
import NovoUsuarioForm from "../../components/NovoUsuarioForm/NovoUsuarioForm";

function CadastroUsuario() {

  if(localStorage.getItem('token')){
    return (
      <>
      <Navbar></Navbar>
      
          <div class="row">
      <NovoUsuarioForm></NovoUsuarioForm>
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

export default CadastroUsuario;

