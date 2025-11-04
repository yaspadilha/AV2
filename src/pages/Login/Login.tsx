import { GiPadlock } from "react-icons/gi";
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
            <button className="login-button">Entrar</button>
        </div>
    )
}

export default Login;