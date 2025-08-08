/* eslint-disable jsx-a11y/alt-text */
import perfil from "../../images/perfil.svg";
import sacola from "../../images/sacola.svg";
import styled from "styled-components";

const Icone = styled.li`
  margin-right: 25px; /* Espaçamento à direita de cada ícone */
  width: 25px;         /* Largura fixa dos ícones */
  cursor: pointer;
}
`;
const Icones = styled.ul`
  display: flex; /* Layout em linha */
  align-items: center; /* Alinha verticalmente ao centro */
`;
const iconesOpcoes = [perfil, sacola];

function IconesHeader() {
  return (
    <Icones>
      {iconesOpcoes.map(
        (
          icone // .map: percorrer um array e transformar seus itens, retornando um novo array com o resultado de cada transformação.
        ) => (
          // eslint-disable-next-line jsx-a11y/alt-text
          <Icone className="icone">
            <img src={icone}></img>
          </Icone>
        )
      )}
    </Icones>
  );
}

export default IconesHeader;
