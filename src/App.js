import React from 'react';
import './App.css';
import logo from './Logo GB WebAssist.webp';

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <a href="#hero">
          <img src={logo} alt="Logo GB WebAssist" height="50" />
        </a>
        <nav>
          <a href="#services">Prestations</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section id="hero" className="hero">
          <h1>Dépannage informatique</h1>
          <p>À domicile dans la Marne et à distance partout en France.</p>
          <a href="https://calendly.com/gaelleboucher-dev/30min" className="btn">Prendre rendez-vous</a>
        </section>

        {/* PRESTATIONS */}
        <section id="services" className="services">
          <h2>Prestations express</h2>
          <div className="cards">
            <div className="card">
              <h3>Réparation & optimisation</h3>
              <p>Nettoyage, lenteurs, mises à jour, blocages, erreurs…</p>
            </div>
            <div className="card">
              <h3>Installation & configuration</h3>
              <p>Imprimante, box Internet, logiciels, ordinateur neuf…</p>
            </div>
            <div className="card">
              <h3>Sécurité & sauvegarde</h3>
              <p>Suppression de virus, protection, récupération de données…</p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact">
          <h2>Contact</h2>
          <p>📍 Vanault-les-Dames (51) et à distance</p>
          <p>📞 <a href="tel:+33674841793">06 74 94 17 93</a></p>
          <p>✉️ <a href="mailto:gaelleboucher.dev@gmail.com">gaelleboucher.dev@gmail.com</a></p>
          <a href="https://calendly.com/gaelleboucher-dev/30min" className="btn">Prendre rendez-vous</a>
        </section>
      </main>

      <footer>
        &copy; {new Date().getFullYear()} GB WebAssist – Dépannage informatique
      </footer>
    </div>
  );
}

export default App;