import React from 'react';
import './Actualite.css'

function Actualite() {
  return (
    <section className="actualite">
        <div className="image">
            <img src="../../assets/Page Accueil/fd_actualite.jpg" alt="Actualité" />
        </div>
        <div className="contenu">
            <h3>Actualité</h3>
            <p>Le lieu où vous pouvez vous connecter avec vos amis, partager des moments spéciaux et explorer de nouvelles rencontres.<br/><br/>Exprimez-vous à travers des photos, des vidéos et des messages, et découvrez le monde passionnant de la communauté Connectify.<br/><br/>Rejoignez-nous dès maintenant et commencez à créer des liens, à inspirer et à être inspiré. Connectify est là pour vous aider à rester connecté et à célébrer les moments de la vie, ensemble.</p>
        </div>
    </section>
  );
}

export default Actualite;