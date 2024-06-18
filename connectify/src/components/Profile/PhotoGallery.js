import React from 'react';
import './ProfileGallery.css'; // Assurez-vous d'ajouter le CSS pour le styling de cette page
import profileImage from '../../assets/Page profil/banner_profil.png';
import userProfilePhoto from '../../assets/Page profil/hexatar_230720ry32sx.png';
function PhotoGallery() {
  return (
    <div className="profile-gallery">
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
    </div>
  );
}

export default PhotoGallery;
