import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import EditarUsuarioForm from "../../components/EditarUsuario/EditarUsuario";
import { useNavigate } from 'react-router-dom';

const MySwal = withReactContent(Swal);

function ListarUsuarioTable() {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [usernameAtual, setUsernameAtual] = useState("");

    const navigate = useNavigate(); // Get the useNavigate hook
    const token = localStorage.getItem('token');
    const auth = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        axios.get("http://localhost:8001/listar-usuarios", auth)
            .then(response => {
                if (response.data.users && Array.isArray(response.data.users)) {
                    setUsers(response.data.users);
                } else {
                    console.log("Resposta inválida:", response.data);
                }
            })
            .catch(err => console.log(err));
    };

    const handleEdit = (username) => {
        setUsernameAtual(username); // Atualize o estado diretamente aqui
        axios.get(`http://localhost:8001/buscar-usuario/${username}`, auth)
            .then(response => {
                MySwal.fire({
                    html: <EditarUsuarioForm 
                        user={response.data} 
                        handleSubmit={handleSubmit} 
                        usernameAtual={username} 
                    />,
                    customClass: {
                        container: 'my-swal-container',
                        popup: 'my-swal-popup',
                        content: 'my-swal-content',
                        confirmButton: 'btn btn-primary',
                        cancelButton: 'btn btn-secondary'
                    },
                    showConfirmButton: false // Remove the "OK" button
                });
            })
            .catch(err => {
                console.log(err);
                Swal.fire({
                    title: "Erro ao atualizar usuário",
                    text: err.response.data.detail,
                    icon: "error",
                    confirmButtonColor: "#0d6efd"
                });
            });
    };
    

    const handleSubmit = (editedUserData) => {
        axios.patch(`http://localhost:8001/atualizar-usuario/${usernameAtual}`, editedUserData , auth)
            .then(() => {
                Swal.fire({
                    title: "Atualizado com sucesso!",
                    text: "As informações do usuário foram atualizadas",
                    icon: "success",
                    confirmButtonColor: "#0d6efd"
                });
                fetchUsers();
                setUsernameAtual("");
                MySwal.close();
            })
            .catch(err => {
                console.log(err);
                Swal.fire({
                    title: "Erro em atualizar usuário",
                    text: err.response.data.detail,
                    icon: "error",
                    confirmButtonColor: "#0d6efd"
                });
            });
    };

    const handleDelete = (user) => {
        console.log(user.username); 
        Swal.fire({
            title: 'Tem certeza que deseja deletar este usuário?',
            html: "Não será possível recuperar os dados depois",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0d6efd',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, deletar!',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                handleDeleteConfirmed(user.username);
            }
        });
    };


    const handleDeleteConfirmed = (usernameToDelete) => {
        axios.delete(`http://localhost:8001/deletar-usuario/${usernameToDelete}`, auth)
        .then(() => {
            Swal.fire({
                title: 'Usuário deletado com sucesso!',
                html: "",
                icon: 'success',
                confirmButtonColor: "#0d6efd"
            })
            fetchUsers();
        })
        .catch(err => {
            console.log(err);
            Swal.fire({
                title: "Erro ao atualizar usuário",
                text: err.response.data.detail,
                icon: "error",
                confirmButtonColor: "#0d6efd"
            });
        });
    };

    const handleSearch = () => {
        axios.get(`http://localhost:8001/buscar-usuario/${searchTerm}`, auth)
        .then(response => {
            if (response.data.length === 0) {
                MySwal.fire({
                    title: 'Nenhum usuário encontrado',
                    text: 'Nenhum usuário corresponde à sua busca.',
                    icon: 'info',
                    confirmButtonColor: '#0d6efd'
                });
            } else {
                setUsers(response.data);
            }
        })
        .catch(err => {
            console.log(err);
        });
    };

    return (
        <div className="container min-vh-100 d-flex justify-content-center mt-5">
            <div className="col-lg-8">
                <div className="card bg-white border shadow-lg border-3 rounded-3 bg-opacity-25">
                    <div className="card-body">
                        <div className="row justify-content-center mb-4">
                            <div className="col-md-6">
                                <h2 className="text-center mb-4">Banco de usuários</h2>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control border-secondary border-3"
                                        placeholder="Buscar usuários por username"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                    <button 
                                        className="btn btn-primary fw-normal" 
                                        type="button"
                                        onClick={handleSearch}
                                    >
                                        Buscar
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive rounded-3" style={{ maxHeight: '400px' }}>
                            <table className="table bg-transparent rounded-3 table-bordered table-fixed">
                                <thead className="border-secondary border-3 rounded-3">
                                    <tr>
                                        <th scope="col" className="bg-secondary bg-opacity-10 text-center">Username</th>
                                        <th scope="col" className="bg-secondary bg-opacity-10 text-center">Pokémon</th>
                                        <th scope="col" className="bg-secondary bg-opacity-10 text-center">Tipo do Pokémon</th>
                                        <th scope="col" className="bg-secondary bg-opacity-10 text-center">CEP</th>
                                        <th scope="col" className="bg-secondary bg-opacity-10 text-center">Logradouro</th>
                                        <th scope="col" className="bg-secondary bg-opacity-10 text-center">Opções</th>
                                    </tr>
                                </thead>
                                <tbody className="border-secondary border-3 rounded-3">
                                    {users.map(user => (
                                        <tr key={user._id}>
                                            <td className="bg-transparent text-center">{user.username}</td>
                                            <td className="bg-transparent text-center">{user.pokename}</td>
                                            <td className="bg-transparent text-center">{user.poketype}</td>
                                            <td className="bg-transparent text-center">{user.cep}</td>
                                            <td className="bg-transparent text-center">{user.logradouro}</td>
                                            <td className="text-center bg-transparent d-flex justify-content-evenly">
                                                <button 
                                                    className="btn shadow-sm btn-primary mr-2" 
                                                    onClick={() => handleEdit(user.username)}
                                                >
                                                    Editar
                                                </button>
                                                <button 
                                                    className="btn shadow-sm btn-danger" 
                                                    onClick={() => handleDelete(user)}
                                                >
                                                    Deletar
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListarUsuarioTable;
