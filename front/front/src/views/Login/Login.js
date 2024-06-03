import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 
import axios from 'axios';
import Swal from 'sweetalert2';

function Login() {
    const [username, setUsename] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/login', {
                username,
                password
            });

            if (response.status === 200) {
                localStorage.setItem('token', response.data);
                console.log(response.data);
                navigate('/listar-usuarios');
            } else {
                console.error('Error authenticating user');
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.detail) {
              Swal.fire({
                title: error.response.data.detail,
                text: "",
                icon: "error",
                confirmButtonColor: "#0d6efd"
              });
            } 
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                <div className="card mb-5 login shadow-sm">
                    <div className="card-body p-sm-5">
                        <div className="text-center mb-4">
                            <img height="32px" width="32px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/512px-Pok%C3%A9_Ball_icon.svg.png?20161023215848" alt="Poké Ball icon"/>
                            <h2>PokéCEP</h2>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input
                                    className="form-control"
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="username"
                                    value={username}
                                    onChange={(e) => setUsename(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    className="form-control"
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <button className="btn btn-primary d-block w-100" type="submit">
                                    Entrar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
