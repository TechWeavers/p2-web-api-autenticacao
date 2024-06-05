import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Certifique-se de importar o Link se estiver usando o React Router

function Navbar() {

    function logout(){
        document.getElementById('logoutButton').addEventListener('click', function() {
            // Remover o item 'token' do localStorage
            localStorage.removeItem('token');
            // Redirecionar para a página de login ou atualizar a página
            window.location.href = '/'
        });
    }

    return (
        <nav className="navbar navbar-expand-md bg-dark py-3" data-bs-theme="dark">
            <div className="container">
                <div className="navbar-brand d-flex align-items-center">
                    <span className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon">
                        <img
                            height="32px"
                            width="32px"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/512px-Pok%C3%A9_Ball_icon.svg.png?20161023215848"
                            alt="Poké Ball icon"
                        />
                    </span>
                    <span>PokéCEP</span>
                </div>

                <div className="collapse navbar-collapse" id="navcol-5">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/cadastrar-usuario" className="nav-link">Cadastrar</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/listar-usuarios" className="nav-link">Listar</Link>
                        </li>
                    </ul>
                    <button id="logoutButton" onClick={logout}>Logout</button>
                </div>

            </div>
        </nav>
    );

}

export default Navbar;
