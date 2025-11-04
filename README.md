# VidaSimples: Seu Seguro de Vida 100% Digital

## 🚀 Sobre o Projeto

O **VidaSimples** é um projeto inovador de `insurtech` (tecnologia + seguros) focado em descomplicar o acesso ao seguro de vida. Inspirado no sucesso de modelos digitais, nosso objetivo é oferecer uma experiência **prática, fácil e transparente** para quem busca proteger o futuro de sua família.

Desenvolvido com **React** e **Vite**, o site oferece uma interface moderna e intuitiva, com um processo de simulação de seguro de vida em múltiplos passos, rápido e sem burocracia.

## ✨ Destaques do Projeto

* **Experiência 100% Digital:** Cotação, simulação e contratação totalmente online.
* **Simulação Descomplicada:** Funil de vendas em passos simples e perguntas diretas.
* **Transparência:** Informações claras sobre coberturas e preços.
* **Foco no Usuário:** Design intuitivo e linguagem acessível, sem jargões complexos do mercado de seguros.
* **Tecnologia Moderna:** Construído com React, Vite e React Hook Form para performance e robustez.

## 🛠️ Tecnologias Utilizadas

* **Frontend:**
    * [React](https://react.dev/) - Biblioteca JavaScript para construir interfaces de usuário.
    * [Vite](https://vitejs.dev/) - Ferramenta de build rápida e moderna para projetos web.
    * [React Router DOM](https://reactrouter.com/web/guides/quick-start) - Para roteamento declarativo no React.
    * [React Hook Form](https://react-hook-form.com/) - Para gerenciamento de formulários com validação eficiente.
    * [CSS Modules](https://github.com/css-modules/css-modules) - Para modularização de estilos CSS.
* **Estilização:**
    * CSS Puro com modularização.
    * Fontes do Google Fonts (`Inter`).

## 📁 Estrutura do Projeto

A arquitetura do projeto foi pensada para ser modular e de fácil manutenção:

```bash
/vida-simples
|-- /src
|   |-- /assets             # Imagens e ícones
|   |-- /components         # Componentes reutilizáveis (Button, Header, Footer)
|   |   |-- /Button
|   |   |   |-- Button.jsx
|   |   |   |-- Button.module.css
|   |   |-- /Header
|   |   |   |-- Header.jsx
|   |   |   |-- Header.module.css
|   |   |-- /Footer
|   |   |   |-- Footer.jsx
|   |   |   |-- Footer.module.css
|   |-- /pages              # As "páginas" do site
|   |   |-- /Home
|   |   |   |-- Home.jsx
|   |   |   |-- Home.module.css
|   |   |-- /Simulacao
|   |   |   |-- Simulacao.jsx
|   |   |   |-- Simulacao.module.css
|   |   |-- /Coberturas
|   |   |   |-- Coberturas.jsx
|   |   |   |-- Coberturas.module.css
|   |   |-- /QuemSomos
|   |   |   |-- QuemSomos.jsx
|   |   |   |-- QuemSomos.module.css
|   |   |-- /Ajuda
|   |   |   |-- Ajuda.jsx
|   |   |   |-- Ajuda.module.css
|   |-- App.jsx             # Componente principal que define as rotas
|   |-- main.jsx            # Ponto de entrada do React
|   |-- index.css           # Estilos globais (resets, fontes, classes utilitárias)
|-- package.json
|-- vite.config.js
|-- .eslintrc.cjs           # Configuração do ESLint
|-- README.md
```

## 🚀 Como Rodar o Projeto

Siga estas instruções para configurar e executar o projeto em sua máquina local.

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) e o [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node) instalados em seu sistema.

### Instalação

1.  **Clone o repositório:**

    ```bash
    git clone [https://github.com/seu-usuario/vida-simples.git](https://github.com/seu-usuario/vida-simples.git)
    ```

    (Lembre-se de substituir `https://github.com/seu-usuario/vida-simples.git` pelo link real do seu repositório.)

2.  **Navegue até o diretório do projeto:**

    ```bash
    cd vida-simples
    ```

3.  **Instale as dependências:**

    ```bash
    npm install
    ```

### Executando o Servidor de Desenvolvimento

Após a instalação das dependências, você pode iniciar o servidor de desenvolvimento:

```bash
npm run dev
```
