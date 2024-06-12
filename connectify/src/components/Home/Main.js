import React from 'react';
import Bienvenue from './Bienvenue';
import Actualite from './Actualite';
import QSN from './QSN';
import Contact from './Contact';
import News from './News';
import './Main.css';

function Main() {
    return (
        <div>
        <Bienvenue />
        <Actualite />
        <QSN />
        <Contact />
        <News />
        </div>
    );
}

export default Main;