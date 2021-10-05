import styled from 'styled-components'
import reading from '../../../vanreading.png';
import bookcover from '../../../bookcover.jpg'
import LongButton from '../atomicComponents/LongButton';


const H2 = styled.h2` 
font-size: 2.8rem;
`
const H6 = styled.h6` 
font-size: 1.8rem;
`

const ImageReading = styled.div`
  height: 70vh;
  width: 130vh;
  border-bottom-right-radius: 20px;
  box-shadow: 2px 2px 2px 2px #805d93;
  background-image: url(${reading});
  background-size: cover;
  background-position: center;

  @media (max-width: 1185px) {
  width: 100vw;
  height: 30vh;
  border-radius: 0px;
  }

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

@media (max-width: 1185px) {
    right: 50px;
    top: 80px;
    font-size: 18px;
    width: 198px;
    height: 80px;
    line-height: 26px;
    border-radius: 30px;
    padding: 15px;
  
  }

`

const NewLife = styled.div`

display:initial;
position: absolute;
width: 441px;
height: 144px;
right: 80px;
top: 273px;
background: #805D93;
border-radius: 50px;
color: #FFFFFF; 
font-weight: normal;
font-size: 20px;
line-height: 25px;
text-align:center;
box-shadow: 1px 1px 1px 1px #169873;
padding:44px; 

@media (max-width: 1185px) {
display: none; 
}  

@media (min-width: 1250px) {
right: 230px;
top: 268px;
  }

`

const Ready = styled.div`
position: absolute;
right: 300px;
top: 449px;
text-align:center;
font-weight: 600;
font-size: 20px;
line-height: 30px;
padding: 5px;
border-radius: 15px;
display: none;

@media (min-width: 1185px) {
  display: initial;
}

@media (min-width: 1296px) {
  font-size: 24px;
      }
@media (min-width: 1250px) {
  right: 137px;
  }

`
const Hit = styled(LongButton)`
display: none;
position: absolute;
right: 30px;
top: 500px;
border-radius:15px;

@media (min-width: 1185px) {
  right: 77px;
  display: initial;
    }`

const Hit2 = styled(LongButton)`
display: none;
position: static;
border-radius:15px;

@media (max-width: 1185px) {
  display: initial;
    }`

const Quote = styled.div`
position: absolute;
width: 298px;
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
display:none;

@media (min-width: 1250px) {
    display: initial;
  }
`
const Quote3 = styled(Quote)`
left: 20px;
top: 445px;
`
const Quote2 = styled(Quote)`
left: 280px;
top: 570px;
`
const Quote1 = styled(Quote)`
left: 435px;
top: 443px;
min-height: 114px;
`

const RectContainer = styled.div`
display: block;

@media (max-width:1185px) {  
margin-top: 20px;
margin-bottom: 20px;  
display: flex;
flex-direction: column-reverse;
align-items: center;
flex-wrap: wrap;
justify-content: center;
}

`

const GreenRectangle = styled.div` 
padding: 50px 40px 50px 40px;
box-sizing: border-box;
border-radius: 50px;
background: #159772;
width: 95%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
 


@media (min-width:1185px) {
position: absolute;
width: 590px;
display: grid; 
grid-template-columns: 0.7fr 1.3fr; 
grid-template-rows: 1fr; 
gap: 0px 15px; 
align-items: center;
justify-items: center;
grid-template-areas: "img text";
min-height: 400px;
left: 0px;
top: 500px;
border-radius: 0px;
border-top-right-radius: 50px;
border-bottom-right-radius: 50px;
}

@media (min-width: 1240px) {
  top: 625px;
  width: 630px;
  }

@media (min-width: 1300px){
  width: 650px;
  }

`
const BookCover = styled.div`
grid-area: img;
height: 307px;
width: 200px;
border-style: solid;
border-width: 6px;
border-color: #FFFFFF;
background-image: url(${bookcover});
background-size: cover;
background-position: center;

@media (max-width:1185px) {
margin-bottom: 10px;
}
`

const BookDesc = styled.div`
grid-area: text;
color: #FFFFFF;
font-size: 1.5rem;
`
const PurpleRectangle = styled.div`
padding: 50px 40px 50px 40px;
width: 95%;
background: #805d93;
border-radius: 50px;
color: #FFFFFF;
margin-bottom: 10px;


@media (min-width: 1185px) {
position: absolute;
width: 590px;
min-height: 540px;
right: 0px;
top: 586px;
border-radius: 0px;
border-top-left-radius: 50px;
border-bottom-left-radius: 50px;

}

@media (min-width: 1300px){
  width: 650px;
  }

`

const BroadFeatures = styled.div`
display: flex;
justify-content: flex-start;
color: #FFFFFF;
font-size: 1.4rem;
box-sizing: border-box;
`
const Icon = styled.div`
color: #FFFFFF;
font-size: 1.4rem;
`
const BroadDesc = styled(Icon)`
color: #FFFFFF;
font-size: 1.4rem;
padding-left: 8px;
`



export { H2, H6, ImageReading, Welcome, NewLife, Ready, Hit, Hit2, Quote1, Quote2, Quote3, RectContainer, GreenRectangle, BookCover, BookDesc, PurpleRectangle, BroadFeatures, Icon, BroadDesc }