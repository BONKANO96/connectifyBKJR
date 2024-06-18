import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate, navigate} from 'react-router-dom';
import { auth } from '../../firebase/firebaseConfig';
import Logo from '../Mise_en_page/Logo';
import Onglets from '../Mise_en_page/Onglets';
import connexionImage from '../../assets/Page Connexion/fd_connexion.jpg';
import './SignIn.css';
import Footer from '../Mise_en_page/Footer';


function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('User signed in successfully');
      history('/profile');
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
          <h3>Connexion</h3>
          <div className="contact">
            <form className="contact-form" onSubmit={handleSignIn}>
              <div className="form-group">
                <label htmlFor="email">Email :</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  placeholder="Entrez votre email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Mot de passe :</label>
                <input 
                  type="password" 
                  id="password" 
                  name="password" 
                  required 
                  placeholder="Entrez votre mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="submit-button">Se connecter</button>
            </form>
          </div>
          <p className='paragraphe'>Pas de compte ? <Link to="/signup" className="signup-link">Inscrivez vous !</Link></p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default SignIn;
