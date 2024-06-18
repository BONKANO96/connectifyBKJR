import React from 'react';
import './ProfileGallery.css'; // Assurez-vous d'ajouter le CSS pour le styling de cette page
import profileImage from '../../assets/Page profil/banner_profil.png';
import userProfilePhoto from '../../assets/Page profil/hexatar_230720ry32sx.png';
import NavbarProfil from './NavbarProfil';
import { NavLink } from 'react-router-dom';
import Footer from '../Mise_en_page/Footer';
function PhotoGallery() {
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
            <h3>Gallery</h3>
            <div className="gallery-content">
                <div className="gallery-item">
                    <img src='../../assets/Page profil/pexels-kampus-production-5935232.jpg' alt="Gallery Item 1" />
                </div>
                <div className="gallery-item">
                    <img src='../../assets/Page profil/pexels-matthias-groeneveld-4200745.jpg' alt="Gallery Item 2" />
                </div>
                <div className="gallery-item">
                    <img src='../../assets/Page profil/pexels-sound-on-3755913.jpg' alt="Gallery Item 3" />
                </div>
                <div className="gallery-item">
                    <img src='../../assets/Page profil/fd_qsn.jpg' alt="Gallery Item 4" />
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
        <Footer />
    </div>
  );
}

export default PhotoGallery;
