import React from 'react';
import styles from './Coberturas.module.css';

function Coberturas() {
  return (
    <div className={styles.pageContent}>
      <h1>Nossas Coberturas</h1>
      <p>Conheça os detalhes da proteção que a VidaSimples oferece para você e sua família.</p>
      {/* Aqui você adicionaria os cards de cobertura com ícones, descrições, etc. */}
      <section className={styles.coverageGrid}>
        <div className={styles.coverageCard}>
          <h3>Morte por Qualquer Causa</h3>
          <p>Garanta tranquilidade para sua família em qualquer situação.</p>
        </div>
        <div className={styles.coverageCard}>
          <h3>Invalidez Permanente por Acidente</h3>
          <p>Receba suporte financeiro em caso de invalidez causada por acidente.</p>
        </div>
        <div className={styles.coverageCard}>
          <h3>Assistência Funeral</h3>
          <p>Toda a burocracia e custos cobertos para um momento delicado.</p>
        </div>
        {/* Adicione mais cards conforme necessário */}
      </section>
    </div>
  );
}

export default Coberturas;