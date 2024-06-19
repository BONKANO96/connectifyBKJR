import connexionImage from '../../assets/Page Inscription/pexels-budgeron-bach-5158233.jpg';
import * as yup from 'yup';
import DOMPurify from 'dompurify';
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
  const schema = yup.object().shape({
    email: yup.string().email('Email invalide').required('Email requis'),
    password: yup.string().min(6, 'Le mot de passe doit contenir au moins 6 caractères').required('Mot de passe requis'),
    passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'Les mots de passe ne correspondent pas')
  });

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
          <div className="signup-form-container">
            <h2>Inscription</h2>
            <form onSubmit={handleSignUp}>
              <div className="input-group">
                <label>Nom :</label>
                <input 
                  type="text" 
                  value={firstName} 
                  onChange={(e) => setFirstName(e.target.value)} 
                  placeholder="Entrez votre nom..." 
                />
                <label>Prénom :</label>
                <input 
                  type="text" 
                  value={lastName} 
                  onChange={(e) => setLastName(e.target.value)} 
                  placeholder="Entrez votre prénom..." 
                />
              </div>
              <div className="input-group">
                <label>Email :</label>
                <input 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="Entrez votre email..." 
                />
              </div>
              <div className="input-group">
                <label>Genre :</label>
                <input 
                  type="radio" 
                  value="Homme" 
                  checked={gender === 'Homme'} 
                  onChange={(e) => setGender(e.target.value)} 
                /> Homme
                <input 
                  type="radio" 
                  value="Femme" 
                  checked={gender === 'Femme'} 
                  onChange={(e) => setGender(e.target.value)} 
                /> Femme
              </div>
              <div className="input-group">
                <label>Mot de passe :</label>
                <input 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  placeholder="Entrez votre mot de passe..." 
                />
              </div>
              <div className="input-group">
                <label>Vérification de mot de passe :</label>
                <input 
                  type="password" 
                  value={confirmPassword} 
                  onChange={(e) => setConfirmPassword(e.target.value)} 
                  placeholder="Entrez votre mot de passe..." 
                />
              </div>
              <button type="submit" className="submit-button"><Link to="/SignIn" style={{color:'white', textDecoration:'none' }}>Valider</Link></button>
            </form>
            <p className='paragraphe'>Déja inscrit ? <Link to="/SignIn" className="signup-link">Connectez vous !</Link></p>
          </div>
          
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default SignUp;







