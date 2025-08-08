// Importa arquivos, componentes e imagens
import Header from "./componentes/Header/index.js";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100vw; /* ocupa toda a largura da tela */
  height: 100vh; /* ocupa toda a altura da tela */
  background-image: linear-gradient(90deg, #c2c3c3 35%, #f8f8f8 100%);
`;

function App() {
  return (
    <AppContainer>
      <Header />
    </AppContainer>
  );
}

export default App;
