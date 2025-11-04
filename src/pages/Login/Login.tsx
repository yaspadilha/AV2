import { GiPadlock } from "react-icons/gi";
import { Link } from "react-router-dom";
import './Login.css';

function Login() {
    return (
        <div className="modal-login">
            <GiPadlock className="modal-login-icone" />
            <h1 className="modal-titulo">Acesso restrito</h1>
            <form>
                <label className="form-input-conjunto">
                    <input className="form-input" type="text" placeholder="Usuário" />
                    <input className="form-input" type="password" placeholder="Senha" />
                </label>
            </form>
            <button className="login-button"><Link to="/aeronaves" className="login-button-legenda">Entrar</Link></button>
        </div>
    )
}

export default Login;