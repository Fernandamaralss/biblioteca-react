import logo from '../../images/logo.png'
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
`
const LogoImage = styled.img`
  width: 170px;
  padding: 10px;
`


function Logo() {
    return (
        <LogoContainer>
          <LogoImage src={logo} alt='Logo-Biblioteca'></LogoImage>
        </LogoContainer>
    )
}

export default Logo;