import perfil from '../../images/perfil.svg'
import sacola from '../../images/sacola.svg'
import './estilo.css';

// Array com os textos e imagens dos icones das opções do menu principal
const iconesOpcoes = [perfil, sacola]

function IconesHeader() {
    return (
        <ul className='icones'>
          { iconesOpcoes.map( (icone) => ( // .map: percorrer um array e transformar seus itens, retornando um novo array com o resultado de cada transformação.
            // eslint-disable-next-line jsx-a11y/alt-text
            <li className='icone'><img src={icone}></img></li>
          )
        )}
        </ul>
        
    )
}

export default IconesHeader;
    