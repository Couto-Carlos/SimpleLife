import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Simulacao from './pages/Simulacao/Simulacao'
// Importe as novas páginas
import Coberturas from './pages/Coberturas/Coberturas'
import QuemSomos from './pages/QuemSomos/QuemSomos'
import Ajuda from './pages/Ajuda/Ajuda'
import Footer from './components/Footer/Footer' // Importando o Footer

function App() {
  return (
    <>
      <Header />
      {/* O <main> agora tem a classe "container" para centralizar o conteúdo */}
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/simulacao" element={<Simulacao />} />
          <Route path="/coberturas" element={<Coberturas />} /> {/* Nova rota */}
          <Route path="/quem-somos" element={<QuemSomos />} /> {/* Nova rota */}
          <Route path="/ajuda" element={<Ajuda />} /> {/* Nova rota */}
        </Routes>
      </main>
      <Footer /> {/* Adicionando o Footer */}
    </>
  )
}

export default App