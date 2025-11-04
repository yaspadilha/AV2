import './Pecas.css';
import CardPecas from '../../components/CardPecas';
import BotaoCadastro from '../../components/BotaoCadastro';
import Modal from '../../components/Modal';
import { useState } from 'react';

function Pecas() {

    const [open, setOpen] = useState(false);

    const [nome, setNome] = useState("");
    const [tipo, setTipo] = useState("");
    const [fornecedor, setFornecedor] = useState("");
    const [status, setStatus] = useState("");

    const dados1 = {
        nome: "Fuselagem",
        status: "Finalizada",
        tipo: "Nacional",
        fornecedor: "Aviopecas",
    };

    const dados2 = {
        nome: "Asas",
        status: "Em produção",
        tipo: "Nacional",
        fornecedor: "Aviopecas",
    };

    const dados3 = {
        nome: "Motor",
        status: "Em transporte",
        tipo: "Nacional",
        fornecedor: "Aviopecas",
    };

    const dados4 = {
        nome: "Hélice",
        status: "Em produção",
        tipo: "Importada",
        fornecedor: "Aviopecas",
    };

    function cadastrar() {
        if (!nome || !tipo || !fornecedor || !status) {
            alert("Preencha todos os campos!");
            return;
        }

        if (!["nacional", "importada"].includes(tipo.toLowerCase())) {
            alert('Tipo inválido! Use: nacional ou importada.');
            return;
        }

        if (!["em produção", "em transporte", "pronta"].includes(status.toLowerCase())) {
            alert('Status inválido! Use: em produção, em transporte ou pronta.');
            return;
        }

        alert("Peça cadastrada!");
        setOpen(false);
    }

    return (
        <>
            <h1 className="pecas-titulo">Peças cadastradas</h1>
            <div className='botoes-pecas'>
                <BotaoCadastro titulo="Cadastrar peça +" onClick={() => setOpen(!open)} />

                <Modal
                    isOpen={open}
                    titulo="Cadastrar peça"
                    legendaBotao="Cadastrar"
                    onConfirm={cadastrar}
                >
                    <input className="form-input" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
                    <input className="form-input" placeholder="Tipo (nacional ou importada)" value={tipo} onChange={e => setTipo(e.target.value)} />
                    <input className="form-input" placeholder="Fornecedor" value={fornecedor} onChange={e => setFornecedor(e.target.value)} />
                    <input className="form-input" placeholder="Status (em produção, transporte ou pronta)" value={status} onChange={e => setStatus(e.target.value)} />
                </Modal>
            </div>

            <div className='container-pecas'>
                <CardPecas nome={dados1.nome} tipo={dados1.tipo} fornecedor={dados1.fornecedor} status={dados1.status} />
                <CardPecas nome={dados2.nome} tipo={dados2.tipo} fornecedor={dados2.fornecedor} status={dados2.status} />
                <CardPecas nome={dados3.nome} tipo={dados3.tipo} fornecedor={dados3.fornecedor} status={dados3.status} />
                <CardPecas nome={dados4.nome} tipo={dados4.tipo} fornecedor={dados4.fornecedor} status={dados4.status} />
            </div>
        </>
    )
}

export default Pecas;