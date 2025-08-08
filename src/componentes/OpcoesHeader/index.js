import styled from "styled-components";

const Opcao = styled.li`
  min-width: 100px; /* Largura mínima para manter proporção */
  font-size: 16px; /* Tamanho da fonte */
  display: flex; /* Permite centralizar o conteúdo */
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  text-align: center; /* Centraliza o texto */
  height: 100%; /* Altura total do container pai */
  padding: 0 5px; /* Espaçamento interno horizontal */
  cursor: pointer; /* Cursor de clique */
  color: #f8f8f8;
`;

const Opcoes = styled.ul`
  display: flex; /* Layout em linha */
`;

// Array com os textos e imagens dos icones das opções do menu principal
const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

function OpcoesHeader() {
  return (
    <Opcoes>
      {textoOpcoes.map(
        (
          texto // .map: percorrer um array e transformar seus itens, retornando um novo array com o resultado de cada transformação.
        ) => (
          <Opcao>
            <p>{texto}</p>
          </Opcao>
        )
      )}
    </Opcoes>
  );
}

export default OpcoesHeader;
