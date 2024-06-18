import React from 'react';
import PhotoGallery from './PhotoGallery';
import VideoGallery from './VideoGallery';
import MusicGallery from './MusicGallery';
import PostWall from './MurPublication';
import NavbarProfil from './NavbarProfil.js';
import HeaderProfil from './HeaderProfil';
import profileImage from '../../assets/Page profil/banner_profil.png';
import userProfilePhoto from '../../assets/Page profil/hexatar_230720ry32sx.png';
import Footer from '../Mise_en_page/Footer.js';
import { NavLink} from 'react-router-dom';


function Profile() {
  return (
    <div>
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
      
      <Footer />
    </div>
  );
}

export default Profile;
