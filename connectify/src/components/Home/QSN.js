import React from 'react';
import './QSN.css'
import './Actualite.css'
function QSN() {
  return (
    <section className="actualite">
      <div className="contenu_qsn">
        <h3>Qui<br/>sommes<br/>nous?</h3>
        <p>
          Chez Connectify, nous sommes une plateforme sociale dynamique et inclusive, dédiée à connecter les individus du monde entier.<br/><br/> 
          Notre objectif est de créer un espace numérique où chacun peut se sentir libre d'exprimer sa véritable identité, de partager ses passions et de tisser des liens authentiques.
        </p>
      </div>

      <div className="image">
        <img src="../../assets/Page Accueil/fd_qsn.jpg" alt="qsn" />
      </div>
    </section>
  );
}

export default QSN;