import React, { useState } from 'react';
import { useForm } from 'react-hook-form'; // IMPORTADO!
import styles from './Simulacao.module.css';
import Button from '../../components/Button/Button'; // IMPORTADO!

function Simulacao() {
  const [step, setStep] = useState(1);
  const [preco, setPreco] = useState(null);

  const { 
    register,     // Para registrar inputs
    handleSubmit, // Para "embrulhar" nossa função de submit
    watch,        // Para observar campos
    trigger,      // Para validar campos sob demanda
    formState: { errors } // Para mostrar erros de validação
  } = useForm({
    mode: 'onChange', // Valida enquanto o usuário digita
    defaultValues: {  // O estado inicial do nosso antigo formData
      nome: '',
      nascimento: '',
      fumante: 'nao',
      coberturaValor: 50000,
    }
  });

  // Observa o valor do slider em tempo real (como fazíamos com useState)
  const watchedCobertura = watch('coberturaValor');

  // Função que será chamada APENAS se o formulário for válido
  const processarSimulacao = (data) => {
    // 'data' contém todos os dados do formulário
    console.log('Formulário válido!', data);
    
    // LÓGICA DE CÁLCULO (SIMPLIFICADA)
    let precoBase = data.coberturaValor / 2000;
    if (data.fumante === 'sim') {
      precoBase *= 1.8;
    }
    
    setPreco(precoBase.toFixed(2));
    setStep(3); // Vai para o passo de "Resultado"
  };

  // Função para avançar, validando APENAS os campos do passo 1
  const handleNextStep = async () => {
    const fieldsToValidate = ['nome', 'nascimento'];
    const isValid = await trigger(fieldsToValidate); // Valida os campos

    if (isValid) {
      setStep(2); // Se for válido, avança
    }
  };

  const handlePrevStep = () => {
    setStep(prev => prev - 1);
  };

  // --- Renderização dos Passos (agora com 'register' e 'errors') ---

  const renderStep1 = () => (
    <div className={styles.step}>
      <h2>Vamos começar. Como podemos te chamar?</h2>
      
      <label>Seu nome:</label>
      <input
        type="text"
        placeholder="Digite seu nome completo"
        {...register('nome', { required: 'O nome é obrigatório' })}
      />
      {errors.nome && <span className={styles.error}>{errors.nome.message}</span>}

      <label>Data de Nascimento:</label>
      <input
        type="date"
        {...register('nascimento', { required: 'A data de nascimento é obrigatória' })}
      />
      {errors.nascimento && <span className={styles.error}>{errors.nascimento.message}</span>}

      <Button onClick={handleNextStep} text="Continuar" type="button" />
    </div>
  );

  const renderStep2 = () => (
    <div className={styles.step}>
      <h2>Personalize sua proteção.</h2>
      
      <label>Você é fumante?</label>
      <select {...register('fumante')}>
        <option value="nao">Não</option>
        <option value="sim">Sim</option>
      </select>

      <label className={styles.sliderLabel}>
        Qual o valor da cobertura?
        <strong> R$ {Number(watchedCobertura).toLocaleString('pt-BR')}</strong>
      </label>
      <input
        type="range"
        min="50000"
        max="500000"
        step="10000"
        {...register('coberturaValor')}
        className={styles.slider}
      />
      
      <div className={styles.buttonGroup}>
        <Button onClick={handlePrevStep} text="Voltar" variant="secondary" type="button" />
        <Button text="Ver meu preço" type="submit" /> {/* Este é o botão de submit! */}
      </div>
    </div>
  );

  const renderStep3 = () => {
    const { nome, coberturaValor } = watch(); // Pega os dados do formulário
    return (
      <div className={styles.step}>
        <h2>Pronto, {nome}!</h2> {/* Usa o nome do formulário! */}
        <p>Este é o seu plano de proteção:</p>
        <div className={styles.resultadoBox}>
          <div className={styles.precoFinal}>
            R$ <span>{preco}</span> /mês
          </div>
          <ul>
            <li>Cobertura por Morte: R$ {Number(coberturaValor).toLocaleString('pt-BR')}</li>
            <li>Proteção 100% digital</li>
            <li>Sem carência para acidente</li>
          </ul>
          <Button onClick={() => alert('Ir para o Checkout!')} text="Contratar Agora" />
        </div>
        <Button onClick={() => { setStep(1); setPreco(null); }} text="Simular Novamente" variant="secondary" />
      </div>
    );
  };
  
  return (
    <div className={styles.simulacaoContainer}>
      <div className={styles.formBox}>
        <div className={styles.progressBar}>
          <div
            className={styles.progress}
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>

        {/* O formulário agora "embrulha" todos os passos.
          handleSubmit(processarSimulacao) é o "portão".
          Nossa função 'processarSimulacao' só roda se a validação passar.
        */}
        <form onSubmit={handleSubmit(processarSimulacao)}>
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
        </form>
      </div>
    </div>
  );
}

export default Simulacao;