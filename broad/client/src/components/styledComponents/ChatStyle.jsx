import styled from 'styled-components'

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-color: #FFFF;
  border: 1px solid #cfcfcf;
  border-radius: 5px;
    
  @media(min - width: 320px) and(max - width: 480px) {
    height: 100 %;
  };

`

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  height: 100%;
  width: 100%;
  @media(min - width: 320px) and(max - width: 480px) {
    height: 100 %
  };
  @media(min - width: 480px) and(max - width: 1200px) {
    width: 60 %;
  };
`

const LeftInnerContainer = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
  margin-left: 5%;
  color: white;
`

const RightInnerContainer = styled.div`
  display: flex;
  flex: 0.5;
  justify-content: flex-end;
  margin-right: 5%;
`

export { OuterContainer, ChatContainer, LeftInnerContainer, RightInnerContainer }