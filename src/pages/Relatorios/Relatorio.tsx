import './Relatorio.css';
import CardRelatorio from '../../components/CardRelatorio';

function Relatorio() {

    const aeronave1 = {
        modelo: "Boeing 737",
        codigo: "12",
        tipo: "Comercial",
        capacidade: "20 passageiros",
        alcance: "2300 km",
        etapas: "Montagem final, Instalação de motores, Testes elétricos",
        pecas: "Asas, Fuselagem, Turbinas",
        testes: "Testes elétricos - Aprovado | Testes hidráulicos - Aprovado"
    };

    return (
        <>
            <h1 className='titulo-relatorio'>Relatórios</h1>
            <h2 className='subtitulo-relatorio'>Relatórios de todas as aeronaves cadastradas:</h2>

            <div className='container-relatorios'>
                <CardRelatorio {...aeronave1} />
            </div>
        </>
    );
}

export default Relatorio;