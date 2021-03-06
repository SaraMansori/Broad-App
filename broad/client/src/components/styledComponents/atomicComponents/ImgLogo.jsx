import logo from '../../../B.svg'
import styled from 'styled-components'


const Img = styled.img`
  height: 30px;
  width: 30px;
  position: absolute;
  left: 15px;
  top: 12px; 
  filter: invert(100%);
`


const ImgLogo = () => {
  return (
    <Img src={logo} alt='Broad Logo' />
  )
}


export default ImgLogo
