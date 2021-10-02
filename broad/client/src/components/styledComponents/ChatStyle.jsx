import styled from 'styled-components'

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1A1A1D;
    @media(min - width: 320px) and(max - width: 480px) {
    height: 100 %;
    };

`

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #FFFFFF;
  border-radius: 8px;
  height: 60%;
  width: 35%;
  @media(min - width: 320px) and(max - width: 480px) {
    height: 100 %
  };
  @media(min - width: 480px) and(max - width: 1200px) {
    width: 60 %;
  };
`

export { OuterContainer, ChatContainer }