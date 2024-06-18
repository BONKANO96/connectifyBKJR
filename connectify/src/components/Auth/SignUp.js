import connexionImage from '../../assets/Page Inscription/pexels-budgeron-bach-5158233.jpg';

import React, { useState, useRef } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context_authentification/AuthContext';
import { auth } from '../../firebase/firebaseConfig';
import Logo from '../Mise_en_page/Logo'; // Chemin correct vers Logo.js
import Onglets from '../Mise_en_page/Onglets'; // Chemin correct vers Onglets.js
import './SignUp.css';
import Footer from '../Mise_en_page/Footer'; // Chemin correct vers Footer.js

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/SignIn');
    } catch (error) {
      console.error("Error signing up:", error);
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
                <input type="email" id="email" name="email" required placeholder="Entrez votre email" />
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
                <input type="password" id="password" name="password" required placeholder="Entrez votre mot de passe" />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirmez le mot de passe :</label>
                <input type="password" id="confirmPassword" name="confirmPassword" required placeholder="Confirmez votre mot de passe" />
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
