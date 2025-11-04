import './etapas.css';
import CardEtapa from '../../components/CardEtapa';
import Modal from '../../components/Modal';
import BotaoCadastro from '../../components/BotaoCadastro';
import { useState } from 'react';

function EtapasProducao() {

    const [open, setOpen] = useState(false);

    const [nome, setNome] = useState("");
    const [prazo, setPrazo] = useState("");
    const [status, setStatus] = useState("");
    const [funcionarios, setFuncionarios] = useState("");

    function cadastrar() {
        if (!nome || !prazo || !status || !funcionarios) {
            alert("Preencha todos os campos!");
            return;
        }

        if (!["pendente", "em andamento", "concluida"].includes(status.toLowerCase())) {
            alert('Status inválido! Use: pendente, em andamento ou concluida.');
            return;
        }

        alert("Etapa cadastrada!");
        setOpen(false);
    }

    return (
        <>
            <h1 className='titulo-etapas'>Gerenciar etapas de produção</h1>
            <BotaoCadastro titulo="Cadastrar etapa +" onClick={() => setOpen(!open)} />

            <Modal
                isOpen={open}
                titulo="Cadastrar etapa"
                legendaBotao="Cadastrar"
                onConfirm={cadastrar}
            >
                <input className="form-input" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
                <input className="form-input" placeholder="Prazo" value={prazo} onChange={e => setPrazo(e.target.value)} />
                <input className="form-input" placeholder="Status (pendente, em andamento, concluida)" value={status} onChange={e => setStatus(e.target.value)} />
                <input className="form-input" placeholder="Funcionários associados" value={funcionarios} onChange={e => setFuncionarios(e.target.value)} />
            </Modal>
            <div className='aeronaves'>
                <div className='etapas-aeronave'>
                    <h1 className='etapas-titulo'>A300</h1>
                    <h2 className='etapas-subtitulo'>Etapas de produção da <br /> aeronave A300 código 200</h2>
                    <CardEtapa nomeEtapa='Montagem das asas' prazo='23/11/2025' status='Concluída' />
                    <CardEtapa nomeEtapa='Conserto das rodas' prazo='27/11/2025' status='Concluída' />
                    <CardEtapa nomeEtapa='Instalação dos sistemas elétricos' prazo='03/12/2025' status='Concluída' />
                    <CardEtapa nomeEtapa='Montagem da turbina' prazo='14/12/2025' status='Concluída' />
                </div>

                <div className='etapas-aeronave'>
                    <h1 className='etapas-titulo'>A300</h1>
                    <h2 className='etapas-subtitulo'>Etapas de produção da <br /> aeronave A300 código 200</h2>
                    <CardEtapa nomeEtapa='Montagem das asas' prazo='23/11/2025' status='Concluída' />
                    <CardEtapa nomeEtapa='Conserto das rodas' prazo='27/11/2025' status='Concluída' />
                    <CardEtapa nomeEtapa='Instalação dos sistemas elétricos' prazo='03/12/2025' status='Concluída' />
                    <CardEtapa nomeEtapa='Montagem da turbina' prazo='14/12/2025' status='Concluída' />
                </div>

                <div className='etapas-aeronave'>
                    <h1 className='etapas-titulo'>A300</h1>
                    <h2 className='etapas-subtitulo'>Etapas de produção da <br /> aeronave A300 código 200</h2>
                    <CardEtapa nomeEtapa='Montagem das asas' prazo='23/11/2025' status='Concluída' />
                    <CardEtapa nomeEtapa='Conserto das rodas' prazo='27/11/2025' status='Concluída' />
                    <CardEtapa nomeEtapa='Instalação dos sistemas elétricos' prazo='03/12/2025' status='Concluída' />
                    <CardEtapa nomeEtapa='Montagem da turbina' prazo='14/12/2025' status='Concluída' />
                </div>
            </div>
        </>
    );
}

export default EtapasProducao;