import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      {/* Adicionando o div.container aqui para centralizar o conteúdo do Header */}
      <div className="container">
        <nav className={styles.nav}>
          <Link to="/" className={styles.logo}>SimpleLife</Link>
          <ul className={styles.navList}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/simulacao">Simule Agora</Link></li>
            <li><Link to="/coberturas">Coberturas</Link></li> {/* Novo link */}
            <li><Link to="/quem-somos">Quem Somos</Link></li> {/* Novo link */}
            <li><Link to="/ajuda">Ajuda</Link></li> {/* Novo link */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;