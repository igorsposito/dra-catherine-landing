// components/Header/Header.jsx
'use client';

import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const whatsappUrl = "https://wa.me/5564974002552?text=Olá,%20vi%20o%20site%20da%20Dra.%20Catherine%20e%20gostaria%20de%20mais%20informações%20sobre%20os%20exames.";

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        {/* Marca / Nome */}
        <div className={styles.brand}>
          <span className={styles.name}>Dra. Catherine Fuchs</span>
          <span className={styles.sub}>Radiologia & Diagnóstico por Imagem</span>
        </div>
        
        {/* Navegação Desktop */}
        <nav className={styles.nav}>
          <a href="#especialidades">Especialidades</a>
          <a href="#sobre">Sobre a Dra.</a>
          <a href="#atendimento">Atendimento</a>
        </nav>

        {/* Botão CTA Desktop */}
        <div className={styles.desktopCta}>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
            Agendar Exame
          </a>
        </div>

        {/* Botão Menu Sanduíche (Mobile) */}
        <button className={styles.hamburger} onClick={toggleMenu} aria-label="Menu">
          {menuOpen ? '✕' : '☰'}
        </button>

      </div>

      {/* Menu Mobile Dropdown / Gaveta */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <a href="#especialidades" onClick={closeMenu}>Especialidades</a>
          <a href="#sobre" onClick={closeMenu}>Sobre a Dra.</a>
          <a href="#atendimento" onClick={closeMenu}>Atendimento</a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.mobileCta}>
            Agendar Exame no WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}