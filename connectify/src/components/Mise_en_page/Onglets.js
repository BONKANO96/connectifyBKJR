import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css'; // Assurez-vous d'avoir les styles pour les onglets
function Onglets() {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(location.pathname);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    }; 

    return (
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
    );
}

export default Onglets;
