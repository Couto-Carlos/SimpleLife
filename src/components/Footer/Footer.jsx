import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container"> {/* Usa o container para centralizar */}
        <p>&copy; {new Date().getFullYear()} VidaSimples. Todos os direitos reservados.</p>
        <div className={styles.footerLinks}>
          <a href="/termos-de-uso">Termos de Uso</a>
          <a href="/politica-de-privacidade">Política de Privacidade</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;