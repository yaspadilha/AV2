import './Relatorio.css';
import CardRelatorio from '../../components/CardRelatorio';

function Relatorio() {

    const aeronave1 = {
        modelo: "Boeing 737",
        codigo: "A100",
        tipo: "Comercial",
        capacidade: "160 passageiros",
        alcance: "3500 km",
        etapas: "Montagem final, Instalação de motores, Testes elétricos",
        pecas: "Asas, Fuselagem, Turbinas",
        testes: "Testes elétricos - Aprovado | Testes hidráulicos - Aprovado"
    };

    const aeronave2 = {
        modelo: "Airbus A320",
        codigo: "A200",
        tipo: "Comercial",
        capacidade: "180 passageiros",
        alcance: "3700 km",
        etapas: "Montagem inicial, Testes de solo",
        pecas: "Fuselagem, Trem de pouso, Sistema eletrônico",
        testes: "Teste aerodinâmico - Aprovado"
    };

    const aeronave3 = {
        modelo: "F-15 Eagle",
        codigo: "A300",
        tipo: "Militar",
        capacidade: "2 tripulantes",
        alcance: "5600 km",
        etapas: "Montagem de asas, Integração de armamentos",
        pecas: "Motor, Aviônicos, Estrutura de asa",
        testes: "Teste hidráulico - Aprovado | Teste estrutural - Reprovado"
    };

    return (
        <>
            <h1 className='titulo-relatorio'>Relatórios</h1>
            <h2 className='subtitulo-relatorio'>Relatórios de todas as aeronaves cadastradas:</h2>

            <div className='container-relatorios'>
                <CardRelatorio {...aeronave1} />
                <CardRelatorio {...aeronave2} />
                <CardRelatorio {...aeronave3} />
            </div>
        </>
    );
}

export default Relatorio;