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
          <p>À domicile dans la Marne/Haute-Marne.</p>
        </section>

        {/* PRESTATIONS */}
        <section id="services" className="services">
          <h2>Prestations express</h2>
          <div className="cards">
            {/* Card 1 */}
            <div className="card">
              <h3>Réparation & optimisation</h3>
              <p>PC lent, virus, erreurs…</p>
              <p className="price">À partir de 40 €</p>
            </div>

            <div className="card">
              <h3>Installation & configuration</h3>
              <p>Windows, imprimante, box…</p>
              <p className="price">À partir de 50 €</p>
            </div>

            <div className="card">
              <h3>Sécurité & sauvegarde</h3>
              <p>Antivirus, backup, récupération…</p>
              <p className="price">À partir de 30 €</p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact">
          <h2>Contact</h2>
          <p>📍 Vanault-les-Dames (51) et à distance</p>
          <p>📞 <a href="tel:+33674841793">06 74 94 17 93</a></p>
          <p>✉️ <a href="mailto:gaelleboucher.dev@gmail.com">gaelleboucher.dev@gmail.com</a></p>
        </section>
      </main>

      <footer>
        &copy; {new Date().getFullYear()} GB WebAssist – Dépannage informatique
      </footer>
    </div>
  );
}

export default App;