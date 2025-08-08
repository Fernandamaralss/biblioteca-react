import Logo from "../Logo";
import OpcoesHeader from "../OpcoesHeader";
import IconesHeader from "../IconesHeader";
import styled from "styled-components";

const HeaderContainer = styled.header`
    display: flex; /* organiza em linha */
    background: #cd4a0d;
    justify-content: center; /* centraliza o conteúdo horizontalmente */
`

function Header() {
    return (
        <HeaderContainer>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>
        </HeaderContainer>        
    )
}

export default Header;