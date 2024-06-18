import React from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f4f4f4;
  min-height: 100vh;
`;

const Header = styled.div`
  width: 100%;
  background-color: #054a26;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fcd619;
`;

const NavLink = styled.a`
  color: #fcd619;
  margin: 0 10px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const VideoSection = styled.div`
  width: 80%;
  margin: 20px 0;
`;

const VideoItem = styled.div`
  background-color: #054a26;
  padding: 20px;
  margin: 10px 0;
  border-radius: 10px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Video = styled.video`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const Footer = styled.footer`
  margin-top: auto;
  padding: 20px;
  background-color: #054a26;
  color: #fcd619;
  width: 100%;
  text-align: center;
`;

const VideoGallery = () => {
  return (
    <Container>
      <Header>
        <div>Connectify</div>
        <div>
          <NavLink href="#profile">Profil</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <NavLink href="#logout">Déconnexion</NavLink>
        </div>
      </Header>
      <VideoSection>
        <h2>Galerie Vidéo</h2>
        <VideoItem>
          <Video controls>
            <source src="path/to/video1.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas l'élément vidéo.
          </Video>
          <p>Vidéo 1</p>
        </VideoItem>
        <VideoItem>
          <Video controls>
            <source src="path/to/video2.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas l'élément vidéo.
          </Video>
          <p>Vidéo 2</p>
        </VideoItem>
      </VideoSection>
      <Footer>
        © 2023 Connectify. Tous Droits Réservés.
      </Footer>
    </Container>
  );
};

export default VideoGallery;
