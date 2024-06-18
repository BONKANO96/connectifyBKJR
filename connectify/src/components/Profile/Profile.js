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

        <div>
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
        </div>

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

export default Profile;
