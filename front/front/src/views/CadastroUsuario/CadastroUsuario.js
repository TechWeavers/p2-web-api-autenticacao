import Navbar from "../../components/Navbar/Navbar";
import NovoUsuarioForm from "../../components/NovoUsuarioForm/NovoUsuarioForm";

function CadastroUsuario() {
  return (
    <>
    <Navbar></Navbar>
    
        <div class="row">
    <NovoUsuarioForm></NovoUsuarioForm>
    </div>
    </>
  );
}

export default CadastroUsuario;

