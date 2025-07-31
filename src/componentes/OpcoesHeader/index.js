import './estilo.css';

// Array com os textos e imagens dos icones das opções do menu principal
const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"]

function OpcoesHeader() {
    return (
        <ul className='opcoes'>
          { textoOpcoes.map( (texto) => ( // .map: percorrer um array e transformar seus itens, retornando um novo array com o resultado de cada transformação.
            <li className='opcao'><p>{texto}</p></li>
          )
        )}
        </ul>
        
    )
}

export default OpcoesHeader;