import BotaoCadastro from '../../components/BotaoCadastro';
import Modal from '../../components/Modal';
import './Funcionario.css';
import { useState } from "react";

function Funcionario() {

    const [open, setOpen] = useState(false);

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [endereco, setEndereco] = useState("");
    const [telefone, setTelefone] = useState("");
    const [senha, setSenha] = useState("");
    const [funcao, setFuncao] = useState("");

    function cadastrar() {
        if (!nome || !email || !endereco || !telefone || !senha || !funcao) {
            alert("Preencha todos os campos!");
            return;
        }

        if (!["administrador", "operador", "engenheiro"].includes(funcao.toLowerCase())) {
            alert('Função inválida! Use: administrador, operador ou engenheiro.');
            return;
        }

        alert("Funcionário cadastrado!");
        setOpen(false);
    }

    return (
        <>
            <h1 className='funcionario-titulo'>Gerenciar funcionários</h1>
            <BotaoCadastro titulo="Cadastrar funcionário +" onClick={() => setOpen(!open)} />
            
            <Modal
                isOpen={open}
                titulo="Cadastrar funcionário"
                legendaBotao="Cadastrar"
                onConfirm={cadastrar}
            >
                <input className="form-input" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
                <input className="form-input" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input className="form-input" placeholder="Endereço" value={endereco} onChange={e => setEndereco(e.target.value)} />
                <input className="form-input" placeholder="Telefone" value={telefone} onChange={e => setTelefone(e.target.value)} />
                <input className="form-input" placeholder="Senha provisória" value={senha} onChange={e => setSenha(e.target.value)} />
                <input className="form-input" placeholder="Função (administrador, operador ou engenheiro)" value={funcao} onChange={e => setFuncao(e.target.value)} />
            </Modal>

            <div className='crud-funcionarios'>
                <table>
                    <tr>
                        <th>Nome</th>
                        <th>Função</th>
                        <th>Email</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td>Maria</td>
                        <td>Engenheiro</td>
                        <td>marialucia3@gmail.com</td>
                        <td>Ativo</td>
                    </tr>
                    <tr>
                        <td>João</td>
                        <td>Administrador</td>
                        <td>jlucas02@gmail.com</td>
                        <td>Ativo</td>
                    </tr>
                    <tr>
                        <td>Carlos</td>
                        <td>Operador</td>
                        <td>csilva90@gmail.com</td>
                        <td>Ativo</td>
                    </tr>
                    <tr>
                        <td>André</td>
                        <td>Operador</td>
                        <td>andremendes@gmail.com</td>
                        <td>Inativo</td>
                    </tr>
                </table>
            </div>
        </>
    );
}

export default Funcionario;