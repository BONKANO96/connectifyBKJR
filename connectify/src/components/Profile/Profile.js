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
        <button>ALL</button>
        <button>Walls</button>
        <button>Gallery</button>
        <button>Video</button>
        <button>Music</button>
      </div>
      <PhotoGallery />
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

export default Profile;
