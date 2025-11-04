import CardAeronaves from "../../components/CardAeronaves";
import BotaoCadastro from "../../components/BotaoCadastro";
import Modal from "../../components/Modal";
import './Aeronave.css';
import { useState } from "react";

function Aeronave() {

    const dados1 = { modelo: "Boieng 737", codigo: "12", status: "Finalizada", tipo: "Comercial", capacidade: "20 passageiros", alcance: "2300 km" };
    const dados2 = { modelo: "Airbus A320", codigo: "13", status: "Em produção", tipo: "Comercial", capacidade: "13 passageiros", alcance: "5600 km" };
    const dados3 = { modelo: "F-15", codigo: "14", status: "Finalizada", tipo: "Militar", capacidade: "11 passageiros", alcance: "7200 km" };

    const [open, setOpen] = useState<boolean>(false);

    const [modelo, setModelo] = useState("");
    const [codigo, setCodigo] = useState("");
    const [tipo, setTipo] = useState("");
    const [capacidade, setCapacidade] = useState("");
    const [alcance, setAlcance] = useState("");

    function cadastrar() {
        if (!modelo || !codigo || !tipo || !capacidade || !alcance) {
            alert("Preencha todos os campos antes de cadastrar!");
            return;
        }

        if (tipo !== "Comercial" && tipo !== "Militar") {
            alert('O campo "Tipo" só pode ser "Comercial" ou "Militar".');
            return;
        }

        alert("Cadastro realizado com sucesso!");
        setOpen(false);
    }

    return (
        <div className="container-aeronaves">
            <div className="topo-aeronaves">
                <h1 className="aeronaves-titulo">Aeronaves cadastradas</h1>
                <BotaoCadastro titulo="Cadastrar aeronave +" onClick={() => setOpen(!open)} />
            </div>

            <Modal
                isOpen={open}
                titulo="Cadastrar nova aeronave"
                legendaBotao="Cadastrar"
                onConfirm={cadastrar}
            >
                <div className="inputs">
                    <input className="form-input" placeholder="Modelo" value={modelo} onChange={e => setModelo(e.target.value)} />
                    <input className="form-input" placeholder="Código" value={codigo} onChange={e => setCodigo(e.target.value)} />
                    <input className="form-input" placeholder="Tipo (Comercial/Militar)" value={tipo} onChange={e => setTipo(e.target.value)} />
                    <input className="form-input" placeholder="Capacidade" value={capacidade} onChange={e => setCapacidade(e.target.value)} />
                    <input className="form-input" placeholder="Alcance" value={alcance} onChange={e => setAlcance(e.target.value)} />
                </div>
            </Modal>

            <div className="tabela-aeronaves">
                <CardAeronaves modelo={dados1.modelo} codigo={dados1.codigo} status={dados1.status} tipo={dados1.tipo} capacidade={dados1.capacidade} alcance={dados1.alcance} />
                <CardAeronaves modelo={dados2.modelo} codigo={dados2.codigo} status={dados2.status} tipo={dados2.tipo} capacidade={dados2.capacidade} alcance={dados2.alcance} />
                <CardAeronaves modelo={dados3.modelo} codigo={dados3.codigo} status={dados3.status} tipo={dados3.tipo} capacidade={dados3.capacidade} alcance={dados3.alcance} />
            </div>
        </div>
    )
}

export default Aeronave;