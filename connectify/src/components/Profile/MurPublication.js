import React, { useState } from 'react';
import HeaderProfil from './HeaderProfil';
import Footer from '../Mise_en_page/Footer';
import { NavLink } from 'react-router-dom';
import NavbarProfil from './NavbarProfil';
import profileImage from '../../assets/Page profil/banner_profil.png';
import userProfilePhoto from '../../assets/Page profil/hexatar_230720ry32sx.png';

function MurPublication() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const handlePost = () => {
    setPosts([...posts, newPost]);
    setNewPost('');
  };


  return (
    <div className="profile-gallery">
        <NavbarProfil />
        <div className="header-content">
            <img src={profileImage} alt="Profile Background" className="profile-image" />
            <div className="name-section">
                <img src={userProfilePhoto} alt="User Profile" className="user-profile-photo" />
                <div className="user-names">
                <h2>Nom</h2>
                <h2>Prénom</h2>
                </div>
            </div>
        </div>
        <div className="gallery-menu">
            <button><NavLink to="/Profile" activeClassName="active">ALL</NavLink></button>
            <button><NavLink to="/MurPublication" activeClassName="active">Walls</NavLink></button>
            <button><NavLink to="/PhotoGallery" activeClassName="active">Gallery</NavLink></button>
            <button><NavLink to="/VideoGallery" activeClassName="active">Video</NavLink></button>
            <button><NavLink to="/MusicGallery" activeClassName="active">Music</NavLink></button>
        </div>
        <main>
          <div className="walls-container">
            <h3>My Walls</h3>
            <div className="wall-item">Le Rap US {'>>>'} Rap FR</div>
            <div className="wall-item">
              <img src="../../assets/Page profil/homer.jpeg" alt="Gallery Item" />
              <p>J'aime le classique...</p>
            </div>
            <div className="message-input">
              <input type="text" placeholder="Écrivez un message..." />
              <button>Envoyer</button>
            </div>
          </div>
        </main>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Footer />
    </div>
  );
}

export default MurPublication;
