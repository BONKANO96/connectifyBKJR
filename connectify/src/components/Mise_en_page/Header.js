import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assurez-vous de créer ce fichier CSS

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const currentTab = 'Acceuil';

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <video autoPlay loop muted>
                <source src="/assets/Page Accueil/fd_accueil.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
            <div className="header-content">
                <div className="logo_header">
                    <h1 style={{ color: "#daca3bff", fontFamily: "Chicle" }}>Connectify</h1>
                </div>
                <nav className={`navbar ${isOpen ? 'open' : ''}`}>
                    <ul>
                        <li>
                            <Link to="/">Accueil</Link>
                        </li>
                        <li className={`navbar-item ${currentTab === 'Connexion' ? 'active' : ''}`}>
                            <Link to="/signin">Connexion</Link>
                        </li>
                        <li className={`navbar-item ${currentTab === 'Inscription' ? 'active' : ''}`}>
                            <Link to="/signup">Inscription</Link>
                        </li>
                    </ul>
                </nav>
                <div className="burger-menu" onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="connectify-text">
                    Connectify
                </div>
            </div>
        </header>
    );
};

export default Header;
