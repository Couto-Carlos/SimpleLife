import React from 'react';
import { Link } from 'react-router-dom'; // Para navegar para a simulação
import styles from './Home.module.css'; // Importando nosso CSS Module
import Button from '../../components/Button/Button'; // Nosso botão reutilizável

// Supondo que você tenha uma imagem em src/assets/hero-image.jpg
import heroImage from '../../assets/hero-image.jpg'; 

function Home() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Proteja o futuro de quem você ama.
        </h1>
        <p className={styles.heroSubtitle}>
          O seguro de vida 100% digital, sem burocracia e que cabe no seu bolso.
        </p>
        
        {/* O Link do React Router é estilizado como nosso componente Button */}
        <Link to="/simulacao">
          <Button text="Simule em 1 minuto" variant="primary" />
        </Link>
      </div>
      <div className={styles.heroImageContainer}>
        <img src={heroImage} alt="Família feliz" className={styles.heroImage} />
      </div>
    </div>
  );
}

export default Home;