import BotaoCadastro from '../../components/BotaoCadastro';
import CardTestes from '../../components/CardTestes';
import Modal from '../../components/Modal';
import './Teste.css';
import { useState } from 'react';

function Teste() {

    const [open, setOpen] = useState(false);
    const [tipo, setTipo] = useState("");
    const [resultado, setResultado] = useState("");

    function cadastrar() {
        if (!tipo || !resultado) {
            alert("Preencha todos os campos!");
            return;
        }

        if (!["eletrico", "hidraulico", "aerodinamico"].includes(tipo.toLowerCase())) {
            alert('Tipo inválido! Use: eletrico, hidraulico ou aerodinamico.');
            return;
        }

        if (!["aprovado", "reprovado"].includes(resultado.toLowerCase())) {
            alert('Resultado inválido! Use: aprovado ou reprovado.');
            return;
        }

        alert("Teste cadastrado!");
        setOpen(false);
    }

    return (
        <>
            <h1 className='testes-titulo'>Gerenciar testes</h1>

            <BotaoCadastro titulo="Cadastrar teste +" onClick={() => setOpen(!open)} />

            <Modal
                isOpen={open}
                titulo="Cadastrar teste"
                legendaBotao="Cadastrar"
                onConfirm={cadastrar}
            >
                <input
                    className="form-input"
                    placeholder="Tipo (eletrico, hidraulico, aerodinamico)"
                    value={tipo}
                    onChange={e => setTipo(e.target.value)}
                />
                <input
                    className="form-input"
                    placeholder="Resultado (aprovado ou reprovado)"
                    value={resultado}
                    onChange={e => setResultado(e.target.value)}
                />
            </Modal>

            <div className='container-testes'>
                <CardTestes aeronave="A300" tipo="Hidráulico" data="20/10/2025" responsavel='Maria Lúcia' status='Aprovado' />
                <CardTestes aeronave="A300" tipo="Hidráulico" data="20/10/2025" responsavel='Maria Lúcia' status='Aprovado' />
                <CardTestes aeronave="A300" tipo="Hidráulico" data="20/10/2025" responsavel='Maria Lúcia' status='Reprovado' />
            </div>
        </>
    );
}

export default Teste;