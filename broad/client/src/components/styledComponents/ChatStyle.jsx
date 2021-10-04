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

const MessageContainerEnd = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 5%;
  margin-top: 3px;

`

const MessageBox = styled.div`
  display: inline-block;
  width: 100%;
  padding: 5px 20px;
`

const MessageContainerStart = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0 5%;
  margin-top: 3px;

`

const PurpleMessage = styled.div`
  background: #805d93;
  color: white;
  padding: 1rem;
  border-radius: 8px;

`

const LightMessage = styled.div`
  background: #eaeaea;
  padding: 1rem;
  border-radius: 8px;
`

const AdminMessage = styled.div`
  background: #159772;
  min-width: 100%;
  padding: 1rem;
  border-radius: 8px;
  color: white;
  text-align: center;
  top: 0;
  & p {
    margin-top: 0;
    margin-bottom: 0;
  }
`

export { OuterContainer, ChatContainer, LeftInnerContainer, RightInnerContainer, MessageContainerStart, MessageContainerEnd, LightMessage, PurpleMessage, MessageBox, AdminMessage }