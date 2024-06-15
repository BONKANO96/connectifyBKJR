import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Header.css';

function Navbar() {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(location.pathname);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    }; 
  return (
    <div className="header-content">
            <div className="logo">
                <h1 style={{ color: "#daca3bff",  fontFamily: "Chicle" }}>Connectify</h1>
            </div>
            <nav className="navbar">
                <ul>
                    <li 
                        className={`navbar-item ${activeTab === '/' ? 'active' : ''}`}
                        onClick={() => handleTabClick('/')}
                    >
                        <Link to="/">Accueil</Link>
                    </li>
                    <li 
                        className={`navbar-item ${activeTab === '/Connexion' ? 'active' : ''}`}
                        onClick={() => handleTabClick('/Connexion')}
                    >
                        <Link to="/signin">Connexion</Link>
                    </li>
                    <li 
                        className={`navbar-item ${activeTab === '/Inscription' ? 'active' : ''}`}
                        onClick={() => handleTabClick('/Inscription')}
                    >
                        <Link to="/signup">Inscription</Link>
                    </li>
                </ul>
            </nav>
      </div>
  );
};


export default Navbar;
