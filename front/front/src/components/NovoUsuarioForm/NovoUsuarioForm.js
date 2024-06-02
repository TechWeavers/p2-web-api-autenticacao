import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function NovoUsuarioForm() {
  const [username, setUsername] = useState('');
  const [pokesearch, setPokesearch] = useState('');
  const [password, setPassword] = useState('');
  const [pokename, setPokename] = useState('');
  const [pokeid, setPokeid] = useState('');
  const [poketype, setPoketype] = useState('');

  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  const auth = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:8001/novo-usuario', {
        username,
        password,
      }, auth);

      Swal.fire({
        title: "Usuário cadastrado com sucesso!",
        icon: "success",
        confirmButtonColor: "#FFB800",
        iconColor: "#ffb800"
      });

      setUsername('');
      setPassword('');
      navigate('/listar-usuario');
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Erro ao cadastrar o usuário",
        text: "Opa, erro ao cadastrar o usuário",
        icon: "error",
        confirmButtonColor: "#FFB800",
        iconColor: "#ffb800"
      });
    }
  };

  return (
    <div className="container min-vh-100 d-flex justify-content-center mt-5">
            <div className="col-lg-8">
                <div className="card bg-white border shadow-lg border-3 rounded-3 bg-opacity-25">
                    <div className="card-body">
                        <div className="row justify-content-center mb-4">
                            <div className="col-md-6">
                    <h2 className="text-center mb-4">Cadastro de Usuário</h2>
                    <form onSubmit={handleSubmit}>

                      <label>Login</label>
                      <div className="mb-3">
                        <input
                          className="form-control shadow-sm"
                          type="text"
                          id="username"
                          name="username"
                          placeholder="Username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          className="form-control shadow-sm"
                          type="password"
                          id="password"
                          name="password"
                          placeholder="Senha"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      <label>Pokémon</label>
                      <div className="mb-3">
                        <input
                          className="form-control shadow-sm"
                          type="name"
                          id="pokesearch"
                          name="pokesearch"
                          placeholder="Pesquisar Pokémon por nome ou ID"
                          value={pokesearch}
                          onChange={(e) => setPokesearch(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          className="form-control shadow-sm"
                          type="name"
                          id="pokename"
                          name="pokename"
                          placeholder="Nome do Pokémon"
                          value={pokename}
                          onChange={(e) => setPokename(e.target.value)}
                          required
                          disabled
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          className="form-control shadow-sm"
                          type="name"
                          id="pokeid"
                          name="pokeid"
                          placeholder="ID do Poekemon"
                          value={pokeid}
                          onChange={(e) => setPokeid(e.target.value)}
                          required
                          disabled
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          className="form-control shadow-sm"
                          type="name"
                          id="poketype"
                          name="poketype"
                          placeholder="Tipo do Pokemon"
                          value={poketype}
                          onChange={(e) => setPoketype(e.target.value)}
                          required
                          disabled
                        />
                      </div>

                      <label>Endereço</label>
                      <div className="mb-3">
                        <input
                          className="form-control shadow-sm"
                          type="name"
                          id="pokesearch"
                          name="pokesearch"
                          placeholder="CEP"
                          value={pokesearch}
                          onChange={(e) => setPokesearch(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          className="form-control shadow-sm"
                          type="name"
                          id="pokename"
                          name="pokename"
                          placeholder="Logradouro"
                          value={pokename}
                          onChange={(e) => setPokename(e.target.value)}
                          required
                          disabled
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          className="form-control shadow-sm"
                          type="name"
                          id="pokeid"
                          name="pokeid"
                          placeholder="Bairro"
                          value={pokeid}
                          onChange={(e) => setPokeid(e.target.value)}
                          required
                          disabled
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          className="form-control shadow-sm"
                          type="name"
                          id="poketype"
                          name="poketype"
                          placeholder="Estado"
                          value={poketype}
                          onChange={(e) => setPoketype(e.target.value)}
                          required
                          disabled
                        />
                      </div>
                      <div>
                        <button className="btn btn-primary d-block w-100" type="submit">
                          Salvar
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}

export default NovoUsuarioForm;
