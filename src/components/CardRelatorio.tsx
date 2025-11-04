import './components.css';

interface CardRelatorioProps {
    modelo: string,
    codigo: string,
    tipo: string,
    capacidade: string,
    alcance: string,
    etapas?: string,
    pecas?: string,
    testes?: string
}

function CardRelatorio({
    modelo,
    codigo,
    tipo,
    capacidade,
    alcance,
    etapas,
    pecas,
    testes
}: CardRelatorioProps) {
    return (
        <div className="container-card-relatorio">
             <div className='card-relatorio'>
            <h1 className='card-relatorio-titulo'>Detalhes da aeronave</h1>
            <div className='card-relatorio-secao'>
                <h2 className='card-relatorio-texto'><strong>Modelo: </strong>{modelo}</h2>
                <h2 className='card-relatorio-texto'><strong>Código: </strong>{codigo}</h2>
                <h2 className='card-relatorio-texto'><strong>Tipo: </strong>{tipo}</h2>
                <h2 className='card-relatorio-texto'><strong>Capacidade: </strong>{capacidade}</h2>
                <h2 className='card-relatorio-texto'><strong>Alcance: </strong>{alcance}</h2>
            </div>
              <h1 className='card-relatorio-titulo'>Etapas de produção</h1>
            <div className='card-relatorio-secao'>
                <h2 className='card-relatorio-texto'><strong>Etapas associadas: </strong>{etapas}</h2>
            </div>
            <h1 className='card-relatorio-titulo'>Peças associadas</h1>
            <div className='card-relatorio-secao'>
                <h2 className='card-relatorio-texto'><strong>Peças da aeronave: </strong>{pecas}</h2>
            </div>
            <h1 className='card-relatorio-titulo'>Testes realizados</h1>
            <div className='card-relatorio-secao'>
                <h2 className='card-relatorio-texto'>{testes}</h2>
            </div>
        </div>
        </div>
    );
}

export default CardRelatorio;