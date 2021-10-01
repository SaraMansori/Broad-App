import styled from 'styled-components'
import reading from '../../../vanreading.png';
import bookcover from '../../../bookcover.jpg'
import LongButton from '../atomicComponents/LongButton';

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
right: -12px;
top: 456px;
text-align:center;
font-weight: 600;
font-size: 24px;
line-height: 30px;`


const Hit = styled(LongButton)`
position: absolute;
right: 122px;
top: 500px;
border-radius:15px;`

const Quote = styled.div`
position: absolute;
width: 298px;
height: 114px;
background: #FFFFFF;
border-style:solid;
border-width: 1px;
border-color: rgba(0, 0, 0, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 20px;
position: absolute;
font-weight: normal;
font-size: 13px;
line-height: 19px;
font-weight:500;
text-align:center;
padding:20px;
display: flex;
align-items: center;
z-index: 1;
`
const Quote1 = styled(Quote)`
left: 40px;
top: 400px;
`
const Quote2 = styled(Quote)`
left: 206px;
top: 540px;
`
const Quote3 = styled(Quote)`
left: 435px;
top: 443px;
`
const GreenRectangle = styled.div` 
position: absolute;
width: 600px;
height: 540px;
left: 0px;
top: 625px;
background: #159772;
border-top-right-radius: 50px;
border-bottom-right-radius: 50px;
`
const BookCover = styled.div`
position:absolute;
height: 402px;
width: 252px;
left: 30px;
top: 70px;
background-color: red;
background-image: url(${bookcover});
background-size: cover;
background-position: center;
`
const BookDesc = styled.div`
  position: absolute;
  width: 270px;
  left: 306px;
  top: 54px;
  color: #FFFFFF;
  font-size: 1.3rem;
`

const PurpleRectangle = styled.div` 
position: absolute;
width: 558px;
height: 540px;
right: 0px;
top: 586px;
background: #805d93;
border-top-left-radius: 50px;
border-bottom-left-radius: 50px;
`

const BroadDesc = styled.div`
position: absolute;
width: 430px;
left: 76px;
top: 40px;
color: #FFFFFF;
font-size: 1.3rem;
`
const Icon = styled.div`
position: absolute;
width: 30px;
left: -45px;
color: #FFFFFF;
font-size: 1.3rem;
`
const Icon1 = styled(Icon)`
top: 1px;
left: -51px;
`
const Icon2 = styled(Icon)`
top: 126px;
`
const Icon3 = styled(Icon)`
top: 230px;
`
const Icon4 = styled(Icon)`
top: 338px;
`




export { ImageReading, Welcome, NewLife, Ready, Hit, Quote1, Quote2, Quote3, GreenRectangle, BookCover, BookDesc, PurpleRectangle, BroadDesc, Icon1, Icon2, Icon3, Icon4 }