import Navbar from "../../components/Navbar/Navbar";
import NovoUsuarioForm from "../../components/NovoUsuarioForm/NovoUsuarioForm";
import Error from "../../components/Error/Error";

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
        <Error></Error>
      </>
    );
  }
  
}

export default CadastroUsuario;

