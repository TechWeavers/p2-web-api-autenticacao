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
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] = useState('');
  const [estado, setEstado] = useState('');

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
        pokename,
        pokeid,
        poketype,
        cep,
        logradouro,
        bairro,
        estado
      }, auth);

      Swal.fire({
        title: "Usuário cadastrado com sucesso!",
        icon: "success",
        confirmButtonColor: "#0d6efd"
      });

      setUsername('');
      setPassword('');
      navigate('/listar-usuarios');
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Erro ao cadastrar o usuário",
        text: "Opa, erro ao cadastrar o usuário",
        icon: "error",
        confirmButtonColor: "#0d6efd"
      });
    }
  };

  const handlePokeSearch = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokesearch.toLowerCase()}`);
      const pokemon = response.data;
      setPokename(pokemon.name);
      setPokeid(pokemon.id);
      setPoketype(pokemon.types.map(typeInfo => typeInfo.type.name).join(', '));
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Erro ao buscar Pokémon",
        text: "Não foi possível encontrar o Pokémon",
        icon: "error",
        confirmButtonColor: "#0d6efd"
      });
    }
  };

  const handleCepSearch = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const address = response.data;
      setLogradouro(address.logradouro);
      setBairro(address.bairro);
      setEstado(address.uf);
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Erro ao buscar endereço",
        text: "Não foi possível encontrar o endereço para o CEP informado",
        icon: "error",
        confirmButtonColor: "#0d6efd"
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
                  <div className="input-group mb-3">
                    <input
                      className="form-control shadow-sm"
                      type="text"
                      id="pokesearch"
                      name="pokesearch"
                      placeholder="Pesquisar Pokémon por nome ou ID"
                      value={pokesearch}
                      onChange={(e) => setPokesearch(e.target.value)}
                    />
                    <button type="button" className="btn btn-secondary" onClick={handlePokeSearch}>
                      Buscar
                    </button>
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control shadow-sm"
                      type="text"
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
                      type="text"
                      id="pokeid"
                      name="pokeid"
                      placeholder="ID do Pokémon"
                      value={pokeid}
                      onChange={(e) => setPokeid(e.target.value)}
                      required
                      disabled
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control shadow-sm"
                      type="text"
                      id="poketype"
                      name="poketype"
                      placeholder="Tipo do Pokémon"
                      value={poketype}
                      onChange={(e) => setPoketype(e.target.value)}
                      required
                      disabled
                    />
                  </div>

                  <label>Endereço</label>
                  <div className="input-group mb-3">
                    <input
                      className="form-control shadow-sm"
                      type="text"
                      id="cep"
                      name="cep"
                      placeholder="CEP"
                      value={cep}
                      onChange={(e) => setCep(e.target.value)}
                    />
                    <button type="button" className="btn btn-secondary" onClick={handleCepSearch}>
                      Buscar
                    </button>
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control shadow-sm"
                      type="text"
                      id="logradouro"
                      name="logradouro"
                      placeholder="Logradouro"
                      value={logradouro}
                      onChange={(e) => setLogradouro(e.target.value)}
                      required
                      disabled
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control shadow-sm"
                      type="text"
                      id="bairro"
                      name="bairro"
                      placeholder="Bairro"
                      value={bairro}
                      onChange={(e) => setBairro(e.target.value)}
                      required
                      disabled
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control shadow-sm"
                      type="text"
                      id="estado"
                      name="estado"
                      placeholder="Estado"
                      value={estado}
                      onChange={(e) => setEstado(e.target.value)}
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
