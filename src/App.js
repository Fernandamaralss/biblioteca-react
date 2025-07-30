import './App.css';
import Logo from './componentes/Logo'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo></Logo>
        <ul className='opcoes'>
          <li className='opcao'><p>Categorias</p></li>
          <li className='opcao'><p>Minha Estante</p></li>
          <li className='opcao'><p>Favoritos</p></li>
        </ul>
      </header>
    </div>
  );
}

export default App;
