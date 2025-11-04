import React from 'react';
import styles from './QuemSomos.module.css';

function QuemSomos() {
  return (
    <div className={styles.pageContent}>
      <h1>Quem Somos</h1>
      <p>
        A VidaSimples nasceu com a missão de descomplicar o seguro de vida, tornando-o acessível e transparente para todos.
        Acreditamos que proteger quem você ama não precisa ser complexo ou caro.
      </p>
      <p>
        Nossa plataforma 100% digital permite que você simule e contrate seu seguro em minutos,
        sem burocracia e com a segurança de parceiros renomados.
      </p>
    </div>
  );
}

export default QuemSomos;