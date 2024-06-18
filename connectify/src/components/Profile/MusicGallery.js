import React, { useState } from 'react';
import HeaderProfil from './HeaderProfil';
import Footer from '../Mise_en_page/Footer';
import { NavLink } from 'react-router-dom';
import NavbarProfil from './NavbarProfil';
import profileImage from '../../assets/Page profil/banner_profil.png';
import userProfilePhoto from '../../assets/Page profil/hexatar_230720ry32sx.png';

function MusicGallery() {
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
            <div className="music-section">
                <h2>Music</h2>
                <div className="music-item">
                    <div>
                        <p>RioGane - Down</p>
                        <audio controls className="music-player">
                        <source src="path/to/song.mp3" type="audio/mpeg" />
                        Votre navigateur ne supporte pas l'élément audio.
                        </audio>
                    </div>
                    <img src='../../assets/Page profil/album-hop.png' alt="RioGane - Down" style={{ width: '50px', height: '50px' }} />
                </div>
                <div className="music-item">
                    <div>
                        <p>Grange - WAP</p>
                        <audio controls className="music-player">
                        <source src="path/to/song2.mp3" type="audio/mpeg" />
                        Votre navigateur ne supporte pas l'élément audio.
                        </audio>
                    </div>
                    <img src='../../assets/Page profil/album-hip-hop.png' alt="Grange - WAP" style={{ width: '50px', height: '50px' }} />
                </div>
            </div>
  
        </main>
      
        <Footer />
    </div>
  );
}

export default MusicGallery;
