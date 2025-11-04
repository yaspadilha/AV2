import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Login from './pages/Login/Login';
import Banner from './components/Banner';
import Menu from './components/Menu';
import Aeronave from './pages/Aeronave/Aeronave';
import Pecas from './pages/Pecas/Pecas';
import Funcionario from './pages/Funcionarios/Funcionario';
import EtapasProducao from './pages/Etapas/EtapasProducao';
import Relatorio from './pages/Relatorios/Relatorio';
import Teste from './pages/Testes/Teste';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Página de login (sem banner e menu) */}
        <Route path="/" element={<Login />} />

        {/* Páginas com Banner e Menu */}
        <Route
          element={
            <div>
              {/* Banner fixo no topo */}
              <Banner />

              {/* Menu logo abaixo */}
              <Menu />

              {/* Conteúdo principal */}
              <main style={{ padding: '20px' }}>
                <Outlet />
              </main>
            </div>
          }
        >
          <Route path="/aeronaves" element={<Aeronave />} />
          {/* Outras rotas do dashboard aqui */}
          <Route path="/pecas" element={<Pecas />} />
          <Route path="/funcionarios" element={<Funcionario />} />
          <Route path="/etapas" element={<EtapasProducao />} />
          <Route path="/relatorios" element={<Relatorio />} />
          <Route path="/testes" element={<Teste />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
