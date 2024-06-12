import React from 'react';
import './Contact.css'
import './Actualite.css'

function Contact() {
    return (
        <section className="actualite">
            <div className="image">
                <img src="../../assets/Page Contact/fd_contact.jpg" alt="Actualité" />
            </div>
            <div className="contenu_contact">
                <h3>Nous contacter</h3>
                <div className='contact'>
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="email">Email :</label>
                            <input type="email" id="email" name="email" required placeholder='Entrez votre email'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Sujet :</label>
                            <input type="text" id="subject" name="subject" required placeholder='Sujet de votre message'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message :</label>
                            <textarea id="message" name="message" rows="5" required placeholder='Ecrivez votre message'></textarea>
                        </div>
                        <button type="submit" className="submit-button">Valider</button>
                    </form>
                </div>
            </div>
        </section>
      );
}

export default Contact;