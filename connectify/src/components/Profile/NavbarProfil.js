import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import'../Mise_en_page/Header.css'
import './NavbarProfil.css'; // Assurez-vous que ce fichier existe et est correctement importé

function NavbarProfil() {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(location.pathname);

    useEffect(() => {
        setActiveTab(location.pathname);
    }, [location]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    }; 

    return (
        <div className="header_profil">
            <div className="logo_profil">
                <h1 style={{ color: "#daca3bff",  fontFamily: "Chicle" }}>Connectify</h1>
            </div>
            <nav className="navbar">
                <ul>
                    <li 
                        className={`navbar-item ${activeTab === '/Profile' ? 'active' : ''}`}
                        onClick={() => handleTabClick('/Profile')}
                    >
                        <Link to="/Profile">Profil</Link>
                    </li>
                    <li 
                        className={`navbar-item ${activeTab === '/Contact' ? 'active' : ''}`}
                        onClick={() => handleTabClick('/Contact')}
                    >
                        <Link to="/Contact">Contact</Link>
                    </li>
                    <li 
                        className={`navbar-item ${activeTab === '/' ? 'active' : ''}`}
                        onClick={() => handleTabClick('/')}
                    >
                        <Link to="/">Déconnexion</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavbarProfil;
