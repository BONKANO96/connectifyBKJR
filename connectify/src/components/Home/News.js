import React from 'react';
import './Bienvenue.css';
import './News.css';
import './Contact';

function News() {
    return (
        <div className="bienvenue">
            <div className="newsletter">
            <h2>Newsletter</h2>
            <p>Inscrivez-vous à notre newsletter pour rester informé(e) et connecté(e) avec Connectify !</p>
            <form className="newsletter-form">
                <input type="email" placeholder="Entrez votre email..." required />
                <button type="submit">S'inscrire</button>
            </form>
            </div>
        </div>
      );
}

export default News;