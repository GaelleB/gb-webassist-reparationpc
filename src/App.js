import React from 'react';
import './App.css';
import logo from './Logo GB WebAssist.webp';

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <a href="#home">
          <img src={logo} alt="Logo GB WebAssist" height="60" />
        </a>
        <nav>
          <a href="#services">Prestations</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home">
          <h1>Bienvenue sur mon site</h1>
          <p></p>
        </section>
      </main>
    </div>
  );
}

export default App;