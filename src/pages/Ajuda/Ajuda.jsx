import React, { useState } from 'react';
import styles from './Ajuda.module.css';

// Componente simples de FAQ para reutilizar
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.faqItem}>
      <button className={styles.faqQuestion} onClick={() => setIsOpen(!isOpen)}>
        {question}
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <div className={styles.faqAnswer}>{answer}</div>}
    </div>
  );
};

function Ajuda() {
  const faqs = [
    {
      question: "O que é seguro de vida digital?",
      answer: "É um seguro de vida que pode ser cotado, contratado e gerenciado totalmente online, sem a necessidade de visitar um corretor ou preencher pilhas de papel."
    },
    {
      question: "Quem pode contratar a VidaSimples?",
      answer: "Qualquer pessoa entre 18 e 65 anos, de forma rápida e descomplicada."
    },
    {
      question: "Como faço para acionar o seguro?",
      answer: "Basta entrar em contato com nossa central de atendimento ou usar a área do cliente para iniciar o processo de sinistro, de forma ágil e humanizada."
    }
  ];

  return (
    <div className={styles.pageContent}>
      <h1>Perguntas Frequentes</h1>
      <p>Encontre as respostas para as suas principais dúvidas sobre a VidaSimples.</p>
      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}

export default Ajuda;