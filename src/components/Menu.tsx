import { Link } from 'react-router-dom';
import './components.css';

function Menu() {
    return (
        <div className="menu">
            <Link to="/aeronaves" className="botao-menu">Aeronaves</Link>
            <Link to="/pecas" className="botao-menu">Peças</Link>
            <Link to="/etapas" className="botao-menu">Etapas</Link>
            <Link to="/funcionarios" className="botao-menu">Funcionários</Link>
            <Link to="/relatorios" className="botao-menu">Relatórios</Link>
            <Link to="/testes" className="botao-menu">Testes</Link>
        </div>
    )
}

export default Menu;