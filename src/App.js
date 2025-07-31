// Importa arquivos, componentes e imagens
import './App.css';
import Logo from './componentes/Logo'
import perfil from './images/perfil.svg'
import sacola from './images/sacola.svg'

// Array com os textos e imagens dos icones das opções do menu principal
const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"]
const iconesOpcoes = [perfil, sacola]

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo></Logo>
        <ul className='opcoes'>
          { textoOpcoes.map( (texto) => ( // .map: percorrer um array e transformar seus itens, retornando um novo array com o resultado de cada transformação.
            <li className='opcao'><p>{texto}</p></li>
          )
        )}
        </ul>
        <ul className='icones'>
          { iconesOpcoes.map( (icone) => (
            <li className='icone'><img src={icone}></img></li>
          )
        )}
        </ul>
      </header>
    </div>
  );
}

export default App;
