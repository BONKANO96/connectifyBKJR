import { useState } from 'react';
import './SignUp.css'; // Assurez-vous d'avoir un fichier CSS pour styliser votre SignUp
import Navbar from '../Mise_en_page/Navbar';
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
      {/* Navbar pourrait être un composant séparé */}
      <Navbar />

      <section className="signup">
        <div className="image">
          <img src="../../assets/Page Connexion/fd_connexion.jpg" alt="Image d'inscription" />
        </div>
        <div className="signup-content">
          <h3>Inscription</h3>
          <div className="signup-form">
            <form onSubmit={handleSignUp}>
              <div className="form-group">
                <label htmlFor="email">Email :</label>
                <input type="email" id="email" name="email" required placeholder="Entrez votre email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="firstName">Prénom :</label>
                <input type="text" id="firstName" name="firstName" required placeholder="Votre prénom" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Nom :</label>
                <input type="text" id="lastName" name="lastName" required placeholder="Votre nom" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="gender">Genre :</label>
                <select id="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                  <option value="">Sélectionnez votre genre</option>
                  <option value="male">Homme</option>
                  <option value="female">Femme</option>
                  <option value="other">Autre</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="password">Mot de passe :</label>
                <input type="password" id="password" name="password" required placeholder="Entrez votre mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirmez le mot de passe :</label>
                <input type="password" id="confirmPassword" name="confirmPassword" required placeholder="Confirmez votre mot de passe" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              </div>
              <button type="submit" className="submit-button">S'inscrire</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignUp;
