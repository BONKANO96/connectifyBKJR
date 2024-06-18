import connexionImage from '../../assets/Page Inscription/pexels-budgeron-bach-5158233.jpg';

import React, { useState } from 'react';
import { signUpWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebaseConfig';
import Logo from '../Mise_en_page/Logo'; // Chemin correct vers Logo.js
import Onglets from '../Mise_en_page/Onglets'; // Chemin correct vers Onglets.js
import './SignUp.css';
import Footer from '../Mise_en_page/Footer'; // Chemin correct vers Footer.js

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    // Mettez ici votre logique pour créer un compte utilisateur avec Firebase ou tout autre service d'authentification
    try {
      // Exemple avec Firebase (vous devrez remplacer par votre propre logique)
      // await createUserWithEmailAndPassword(auth, email, password);
      alert('User signed up successfully');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <section className="actualite">
        
        <div className="image">
          <Logo className="logo na"/>
          <img src={connexionImage} alt="Connexion" />
        </div>
        <div className="contenu_contact">
          <Onglets className="onglets"/>
          <h3>Inscription</h3>
          <div className="contact">
            <form className="contact-form" onSubmit={handleSignUp}>
              <div className="form-group name-group">
                <div className="form-group-inner">
                  <label htmlFor="firstName">Prénom :</label>
                  <input type="text" id="firstName" name="firstName" required placeholder="Votre prénom" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="form-group-inner">
                  <label htmlFor="lastName">Nom :</label>
                  <input type="text" id="lastName" name="lastName" required placeholder="Votre nom" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email :</label>
                <input type="email" id="email" name="email" required placeholder="Entrez votre email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="radio-group">
                <label htmlFor="gender">Genre :
                  <label>
                    <input type="radio" id="genderMale" name="gender" value="male" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} />
                    Homme
                  </label>

                  <label>
                    <input type="radio" id="genderFemale" name="gender" value="female" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} />
                    Femme
                  </label>
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="password">Mot de passe :</label>
                <input type="password" id="password" name="password" required placeholder="Entrez votre mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirmez le mot de passe :</label>
                <input type="password" id="confirmPassword" name="confirmPassword" required placeholder="Confirmez votre mot de passe" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              </div>
              <button type="submit" className="submit-button"><Link to="/Profile" style={{color:'white', textDecoration:'none' }}>Valider</Link></button>
            </form>
          </div>
          <p className='paragraphe'>Déja inscrit ? <Link to="/signin" className="signup-link">Connectez vous !</Link></p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default SignUp;
