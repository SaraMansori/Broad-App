import * as React from 'react';
import styled from 'styled-components'
import { Button, Container, Col, Row } from 'react-bootstrap/';

import reading from '../vanreading.png';

const ImageReading = styled.div`
  height: 70vh;
  width: 62vw;
  border-bottom-right-radius: 20px;
  box-shadow: 2px 2px 2px 2px #805d93;
  background-image: url(${reading});
  background-size: cover;
  background-position: center;
`;

const Welcome = styled.div`

position: absolute;
width: 535px;
height: 200px;
right: 50px;
top: 100px;
color: #613175; 
background: #FFFFFF;
border-radius: 50px;
font-weight: normal;
font-size: 48px;
line-height: 60px;
text-align:center;
box-shadow: 2px 2px 2px 2px #805d93;
padding:40px; 
z-index: 1;
`

const NewLife = styled.div`

position: absolute;
width: 441px;
height: 144px;
right: 230px;
top: 268px;
background: #805D93;
border-radius: 50px;
color: #FFFFFF; 
font-weight: normal;
font-size: 20px;
line-height: 25px;
text-align:center;
box-shadow: 1px 1px 1px 1px #169873;
padding:44px; 
`

const Ready = styled.div`
position: absolute;
width: 400px;
height: 30px;
right: 70px;
top: 436px;
text-align:center;
font-weight: 500;
font-size: 24px;
line-height: 30px;`


const Hit = styled(Button)`
position: absolute;
width: 400px;
height: 30px;
right: 122px;
top: 480px;
width: 300px;
height: 40px;
text-align:center;
font-weight: 500;
font-size: 20px;
line-height: 30px;`

const HomePage = () => {
  return (
    <>
      <ImageReading />
      <Welcome>welcome to <strong>Broad the books' road</strong></Welcome>
      <NewLife>
        The only place where your <strong>books</strong> can find their way to a <strong>new life</strong> !
      </NewLife>
      <Ready>Ready to start your journey?</Ready>
      <Hit variant="secondary" style={{ color: 'white' }}>
        Hit the Road
      </Hit>

    </>
  );
};

export default HomePage;
