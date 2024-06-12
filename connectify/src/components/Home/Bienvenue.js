import React, {useEffect} from 'react';
import './Bienvenue.css';

function Bienvenue() {
    useEffect(() => {
      const translations = {
        fr: "Bienvenue",
        en: "Welcome",
        es: "Bienvenido",
        de: "Willkommen",
        // Ajoutez autant de langues que nécessaire
      };
  
      function changeLanguage() {
        const welcomeText = document.getElementById("welcome-text");
        const currentLanguage = welcomeText.getAttribute("data-lang");
        const languages = Object.keys(translations);
        let nextIndex = (languages.indexOf(currentLanguage) + 1) % languages.length;
        const nextLanguage = languages[nextIndex];
  
        welcomeText.textContent = translations[nextLanguage];
        welcomeText.setAttribute("data-lang", nextLanguage);
      }
  
      const intervalId = setInterval(changeLanguage, 1000);
      
      return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);
  
  return (
    <section className="bienvenue">
        <div className="bienvenue-content">
            <h2 id="welcome-text" data-lang="fr">Bienvenue</h2>
            <p>"Harmonisez vos passions, partagez vos émotions avec Connectify !"</p>
        </div>
    </section>
  );
}

export default Bienvenue;