import React from 'react';
import styles from './Button.module.css';

/**
 * Nosso botão reutilizável.
 * @param {Object} props
 * @param {string} props.text - O texto a ser exibido no botão.
 * @param {'primary' | 'secondary'} [props.variant='primary'] - A variante visual.
 * @param {string} [props.type='button'] - O tipo nativo do botão (button, submit, reset).
 * @param {function} props.onClick - A função a ser chamada no clique.
 * @param {boolean} [props.disabled=false] - Se o botão está desabilitado.
 */
function Button({ 
  text, 
  variant = 'primary', 
  type = 'button', 
  onClick, 
  disabled = false 
}) {
  // Combina a classe base com a classe da variante
  const buttonClass = `${styles.btn} ${styles[variant]}`;

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;