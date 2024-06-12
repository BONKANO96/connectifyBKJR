import React from 'react';
import PhotoGallery from './PhotoGallery';
import VideoGallery from './VideoGallery';
import MusicGallery from './MusicGallery';
import PostWall from './MurPublication';

function Profile() {
  return (
    <div>
      <h2>Mon Profil</h2>
      <PostWall />
      <PhotoGallery />
      <VideoGallery />
      <MusicGallery />
    </div>
  );
}

export default Profile;
